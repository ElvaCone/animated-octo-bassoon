import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget; // 获取当前元素
        event.preventDefault(); // 阻止表单提交
        if (form.checkValidity() === false) { //如果表单字段没有通过验证，checkValidity() 会返回 false
            event.stopPropagation(); // 阻止事件进一步传播
            setValidated(true); // 当 validated 为 true 时，表单会根据自定义的验证规则，显示相应的验证反馈
        } else {
            // 模拟表单提交
            if (email === 'admin@example.com' && password === 'password123') {
                alert('Login successful!');
            } else {
                setErrorMessage('Invalid email or password');
            }
        }
    };

    return (

        <Container>

            <Row>
                <Col md={6}>This takes 6/12 columns</Col>
                <Col md={6}>This also takes 6/12 columns</Col>
            </Row>
            <Row>
                <Col md={4}>4/12 columns</Col>
                <Col md={4}>4/12 columns</Col>
                <Col md={4}>4/12 columns</Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h2 className="text-center">Login</h2>
                    {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                    {/* 当 noValidate 被设置时，它会禁用浏览器默认的 HTML5 表单验证。这样做的目的是为了使用自定义的验证逻辑，而不是依赖浏览器的内置验证提示 */}
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        {/* controlId="formEmail" 会为 Form.Control 生成 id="formEmail" 且 <Form.Label> 会自动被绑定到 Form.Control 上的 id 属性， 所以当用户点击 Email address 标签时 光标会自动聚焦到对应的输入框中。 */}
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                minLength={6}
                            />
                            <Form.Control.Feedback type="invalid">
                                Password must be at least 6 characters long.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;
