import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // 导入Quill的样式文件


const QuillEditor = () => {
    const [value, setValue] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }], // 提供标题大小（header）选项（如H1、H2）和字体（font）选择
            [{ size: [] }], // 提供字体大小的选择
            ['bold', 'italic', 'underline', 'strike', 'blockquote'], // 提供加粗、斜体、下划线、删除线和引用块的格式化按钮
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, // 提供有序列表（数字列表）、无序列表（项目符号）的选项
            { 'indent': '-1' }, { 'indent': '+1' }], // 提供减少缩进（indent: -1）和增加缩进（indent: +1）的选项
            ['link', 'image', 'video'], // 提供插入超链接、图片和视频的按钮
            ['clean'] // 提供清除格式的按钮，用于移除当前选中文字的所有格式
        ],
        clipboard: {
            matchVisual: false, // 粘贴内容时不匹配原来的视觉样式，即直接以纯文本形式粘贴内容
        }
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    return (
        <ReactQuill
            value={value}
            onChange={(content) => setValue(content)}
            modules={modules}
            formats={formats}
            placeholder="Type something..."
        />
    );
}

export default QuillEditor

