import { useState, ChangeEvent } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { saveAs } from "file-saver";

// 定义 subtitleFile 的类型
type SubtitleFile = File | null;

function Test() {
  const [subtitleFile, setSubtitleFile] = useState<SubtitleFile>(null);
  const [adjustment, setAdjustment] = useState<number>(0);
  const [processedSubtitles, setProcessedSubtitles] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [fileFormat, setFileFormat] = useState<string>(""); // 识别文件格式

  // 上传文件
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSubtitleFile(file);

    if (file) {
      // 读取文件前几行，检查文件格式
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        if (content.includes("[Script Info]") || content.includes("[V4+ Styles]")) {
          setFileFormat("ass");
        } else {
          setFileFormat("srt");
        }
      };
      reader.readAsText(file);
    }
  };

  // 输入框内容变化
  const handleAdjustmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAdjustment(parseFloat(event.target.value));
  };

  // 处理字幕
  const handleProcess = () => {
    if (!subtitleFile || !fileFormat) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const lines = content.split("\n");

      const adjustedLines = lines.map((line) => {
        if (fileFormat === "ass") {
          // 匹配时间格式 h:mm:ss.cs (ASS 格式)
          return line.replace(/(\d+):(\d{2}):(\d{2})\.(\d{2})/g, (match, p1, p2, p3, p4) => {
            const totalSeconds =
              parseInt(p1) * 3600 +
              parseInt(p2) * 60 +
              parseInt(p3) +
              parseInt(p4) / 100;
            const adjustedSeconds = totalSeconds + adjustment;
            const adjustedHours = Math.floor(adjustedSeconds / 3600);
            const adjustedMinutes = Math.floor((adjustedSeconds % 3600) / 60);
            const adjustedSecondsFloor = Math.floor(adjustedSeconds % 60);
            const adjustedCentiseconds = Math.floor((adjustedSeconds % 1) * 100);

            return `${String(adjustedHours).padStart(1, "0")}:${String(adjustedMinutes).padStart(
              2,
              "0"
            )}:${String(adjustedSecondsFloor).padStart(2, "0")}.${String(adjustedCentiseconds).padStart(
              2,
              "0"
            )}`;
          });
        } else if (fileFormat === "srt") {
          // 匹配时间格式 hh:mm:ss,ms (SRT 格式)
          return line.replace(/(\d{2}):(\d{2}):(\d{2}),(\d{3})/g, (match, p1, p2, p3, p4) => {
            const totalSeconds =
              parseInt(p1) * 3600 +
              parseInt(p2) * 60 +
              parseInt(p3) +
              parseInt(p4) / 1000;
            const adjustedSeconds = totalSeconds + adjustment;
            const adjustedHours = Math.floor(adjustedSeconds / 3600);
            const adjustedMinutes = Math.floor((adjustedSeconds % 3600) / 60);
            const adjustedSecondsFloor = Math.floor(adjustedSeconds % 60);
            const adjustedMilliseconds = Math.floor((adjustedSeconds % 1) * 1000);

            return `${String(adjustedHours).padStart(2, "0")}:${String(adjustedMinutes).padStart(
              2,
              "0"
            )}:${String(adjustedSecondsFloor).padStart(2, "0")},${String(adjustedMilliseconds).padStart(
              3,
              "0"
            )}`;
          });
        } else {
          return line;
        }
      });

      setProcessedSubtitles(adjustedLines.join("\n"));
      setIsProcessing(true);
    };
    reader.readAsText(subtitleFile);
  };

  // 下载处理好的字幕文件
  const handleDownload = () => {
    const blob = new Blob([processedSubtitles], { type: "text/plain;charset=utf-8" });
    const fileName = `adjusted_subtitles.${fileFormat}`;
    saveAs(blob, fileName);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2>Subtitle Adjuster</h2>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Subtitle File</Form.Label>
            <Form.Control
              type="file"
              accept=".srt, .ass, .txt"
              onChange={handleFileUpload}
            />
          </Form.Group>
          <Form.Group controlId="adjustment" className="mb-3">
            <Form.Label>Time Adjustment (seconds)</Form.Label>
            <Form.Control
              type="number"
              step="0.1"
              placeholder="Enter seconds (e.g., -7.7 or 7.7)"
              onChange={handleAdjustmentChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleProcess} disabled={!subtitleFile}>
            Process
          </Button>
          <Button
            variant={isProcessing ? "primary" : "secondary"}
            onClick={handleDownload}
            className="ms-3"
            disabled={!isProcessing}
          >
            Download
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Test;

