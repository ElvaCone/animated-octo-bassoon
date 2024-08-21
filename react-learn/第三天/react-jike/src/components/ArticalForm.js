import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        category: '',
        uploadMode: 'none',
        files: [],
        description: ''
    });
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // 计算属性名称（computed property names）
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, files });
    };

    const handleEditorChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (formData.uploadMode === 'multiple' && formData.files.length !== 3) {
            setError('请上传三张图片');
            return;
        }

        if (formData.uploadMode === 'single' && formData.files.length !== 1) {
            setError('请上传一张图片');
            return;
        }

        setValidated(true);
        // 处理提交逻辑
        console.log('提交的数据: ', formData);
    };

    return (
        <Container>
            <h1 className="mt-5">示例表单</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                {/* 输入框 */}
                <Form.Group controlId="formName">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="输入你的名字"
                        required
                    />
                    <Form.Control.Feedback type="invalid">
                        请输入你的名字
                    </Form.Control.Feedback>
                </Form.Group>

                {/* 单选按钮 */}
                <Form.Group controlId="formGender" className="mt-3">
                    <Form.Label>性别</Form.Label>
                    <div>
                        <Form.Check
                            inline
                            label="男"
                            name="gender"
                            type="radio"
                            id="genderMale"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleInputChange}
                            required
                        />
                        <Form.Check
                            inline
                            label="女"
                            name="gender"
                            type="radio"
                            id="genderFemale"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleInputChange}
                        />
                    </div>
                    <Form.Control.Feedback type="invalid">
                        请选择性别
                    </Form.Control.Feedback>
                </Form.Group>

                {/* 下拉列表 */}
                <Form.Group controlId="formCategory" className="mt-3">
                    <Form.Label>类别</Form.Label>
                    <Form.Control
                        as="select"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="">选择类别</option>
                        <option value="category1">类别 1</option>
                        <option value="category2">类别 2</option>
                        <option value="category3">类别 3</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                        请选择类别
                    </Form.Control.Feedback>
                </Form.Group>

                {/* 图片上传模式选择 */}
                <Form.Group controlId="formUploadMode" className="mt-3">
                    <Form.Label>图片上传模式</Form.Label>
                    <div>
                        <Form.Check
                            inline
                            label="无图模式"
                            name="uploadMode"
                            type="radio"
                            id="uploadModeNone"
                            value="none"
                            checked={formData.uploadMode === 'none'}
                            onChange={handleInputChange}
                        />
                        <Form.Check
                            inline
                            label="单图模式"
                            name="uploadMode"
                            type="radio"
                            id="uploadModeSingle"
                            value="single"
                            checked={formData.uploadMode === 'single'}
                            onChange={handleInputChange}
                        />
                        <Form.Check
                            inline
                            label="三图模式"
                            name="uploadMode"
                            type="radio"
                            id="uploadModeMultiple"
                            value="multiple"
                            checked={formData.uploadMode === 'multiple'}
                            onChange={handleInputChange}
                        />
                    </div>
                </Form.Group>

                {/* 上传图片 */}
                {formData.uploadMode !== 'none' && (
                    <Form.Group controlId="formFile" className="mt-3">
                        <Form.Label>上传图片</Form.Label>
                        <Form.Control
                            type="file"
                            name="files"
                            multiple={formData.uploadMode === 'multiple'}
                            onChange={handleFileChange}
                            accept="image/*"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {formData.uploadMode === 'multiple'
                                ? '请上传三张图片'
                                : '请上传一张图片'}
                        </Form.Control.Feedback>
                    </Form.Group>
                )}

                {/* 富文本编辑器 */}
                <Form.Group controlId="formDescription" className="mt-3">
                    <Form.Label>描述</Form.Label>
                    <ReactQuill
                        value={formData.description}
                        onChange={handleEditorChange}
                        modules={{
                            toolbar: [
                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                [{ 'size': [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                ['link', 'image'],
                                ['clean']
                            ]
                        }}
                        formats={[
                            'header', 'font', 'size',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet',
                            'link', 'image'
                        ]}
                    />
                </Form.Group>

                {/* 提交按钮 */}
                <Button variant="primary" type="submit" className="mt-3">
                    提交
                </Button>
            </Form>
        </Container>
    );
};

export default MyForm;

