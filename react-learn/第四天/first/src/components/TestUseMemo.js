import React, { useMemo, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function TestUseState() {
    // 定义两个 state
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState(0);

    // 斐波那契函数
    const fibonacci = (n) => {
        console.log('计算执行了')
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    // const result = fibonacci(state1)

    const result = useMemo(() => {
        return fibonacci(state1) // 只有state1改变才会执行
    }, [state1])

    console.log('页面渲染了')

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h2>State 1: {state1}</h2>
                    <h2>State 2: {state2}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" onClick={() => setState1(state1 + 1)}>
                        增加 State 1
                    </Button>
                </Col>
                <Col>
                    <Button variant="secondary" onClick={() => setState2(state2 + 1)}>
                        增加 State 2
                    </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4>斐波那契数列（State 1 为参数）: {result}</h4>
                </Col>
            </Row>
        </Container>
    );
}

export default TestUseState;

