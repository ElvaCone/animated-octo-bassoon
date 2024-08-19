import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function MyFormComponent() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // 校验函数 - 验证邮箱格式
    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    // 校验函数 - 验证密码长度
    const validatePassword = (value) => {
        if (value.length < 8) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    };

    // 提交表单
    const handleSubmit = (e) => {
        e.preventDefault();
        validateEmail(email);
        validatePassword(password);
        if (!emailError && !passwordError) {
            // 提交逻辑
            alert('Form submitted successfully!');
        }
    };

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => validateEmail(e.target.value)} // 失焦时校验
                    isInvalid={!!emailError} // Bootstrap 校验状态  两次取反
                />
                <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={(e) => validatePassword(e.target.value)} // 失焦时校验
                    isInvalid={!!passwordError} // Bootstrap 校验状态  两次取反
                />
                <Form.Control.Feedback type="invalid">{passwordError}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default MyFormComponent;
