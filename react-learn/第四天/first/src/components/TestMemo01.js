import React, { memo, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Son() {
    console.log('Son渲染了')
    return (
        <div>
            This is Son.
        </div>
    )
}

// React组件默认的渲染机制：父组件重新渲染时子组件也会重新渲染
// memo函数生成的缓存组件只有在props发生变化时才会重新渲染
const MemoSon = memo(function Son() {
    console.log('MemoSon渲染了')
    return (
        <div>
            This is MemoSon.
        </div>
    )
})

function TestMemo01() {
    const [state, setState] = useState(0);

    return (
        <Container className="mt-4">
            <Button variant="primary" onClick={() => setState(state + 1)}>
                增加 state
            </Button>
            
            <Son />
            <MemoSon />
        </Container>
    );
}

export default TestMemo01;

