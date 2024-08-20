import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ArticalForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        category: '',
        file: null,
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value }); // 计算属性名称（computed property names）
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleEditorChange = (value) => {
        setFormData({ ...formData, description: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 处理提交逻辑
        console.log('提交的数据: ', formData);
    };

    return (
        <Container>
            <h1 className="mt-5">示例表单</h1>
            <Form noValidate onSubmit={handleSubmit}>
                {/* 输入框 */}
                <Form.Group controlId="formName">
                    <Form.Label>姓名</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="输入你的名字"
                    />
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
                </Form.Group>

                {/* 下拉列表 */}
                <Form.Group controlId="formCategory" className="mt-3">
                    <Form.Label>类别</Form.Label>
                    <Form.Control
                        as="select"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="">选择类别</option>
                        <option value="category1">类别 1</option>
                        <option value="category2">类别 2</option>
                        <option value="category3">类别 3</option>
                    </Form.Control>
                </Form.Group>

                {/* 上传图片 */}
                <Form.Group controlId="formFile" className="mt-3">
                    <Form.Label>上传图片</Form.Label>
                    <Form.Control
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                    />
                </Form.Group>

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

export default ArticalForm;
