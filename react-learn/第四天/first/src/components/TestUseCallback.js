import React, { memo, useCallback, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Son() {
    console.log('Son渲染了')
    return (
        <div>
            This is Son.
        </div>
    )
}

const MemoSon = memo(function Son({ func1, func2 }) {
    if (func1 !== undefined) {
        console.log('MemoSon渲染了,func1')
    } else if (func2 !== undefined) {
        console.log('MemoSon渲染了,func2')
    }

    return (
        <div>
            This is MemoSon.
        </div>
    )
})

function TestUseCallback() {
    const [state, setState] = useState(0);

    const func1 = () => {
        console.log(111)
    }

    const func2 = useCallback(() => {
        console.log(222)
    }, [])

    return (
        <Container className="mt-4">
            <Button variant="primary" onClick={() => setState(state + 1)}>
                增加 state
            </Button>

            <MemoSon func1={func1} />
            <MemoSon func2={func2} />
        </Container>
    );
}

export default TestUseCallback;

