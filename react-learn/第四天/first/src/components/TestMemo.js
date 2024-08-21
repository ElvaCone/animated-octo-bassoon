import React, { memo, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

// React组件默认的渲染机制：父组件重新渲染时子组件也会重新渲染
// memo函数生成的缓存组件只有在props发生变化时才会重新渲染
const MemoSon = memo(function Son() {
    console.log('子组件渲染了')
    return (
        <div>
            This is Son.
        </div>
    )
})

function TestMemo() {
    const [state1, setState1] = useState(0);

    return (
        <Container className="mt-4">
            <Button variant="primary" onClick={() => setState1(state1 + 1)}>
                增加 State 1
            </Button>
            {/* <Son /> */}
            <MemoSon />
        </Container>
    );
}

export default TestMemo;

