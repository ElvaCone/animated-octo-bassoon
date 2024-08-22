import React, { forwardRef, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

function Son(props) {
    return <Form.Control type='text' {...props} />
}

function Son1({ inputRef, ...otherProps }) { // 通过props传递ref
    return <Form.Control type='text' ref={inputRef} {...otherProps} />
}

const ForwardRefSon = forwardRef((props, ref) => {
    return <Form.Control type='text' ref={ref} {...props} />
})

function TestForwardRef() {
    const sonRef = useRef(null)
    const inputRef = useRef(null)
    const forwardRefSonRef = useRef(null)

    const showRef = () => {
        console.log(sonRef) // sonRef.current是null
        console.log(inputRef)
        console.log(forwardRefSonRef)
        // sonRef.current.focus()
        inputRef.current.focus()
        forwardRefSonRef.current.focus()
    }

    return (
        <Container className="mt-4">
            <Button variant="primary" onClick={showRef}>
                打印ref
            </Button>

            <Son ref={sonRef} placeholder={'Son'} />
            <Son1 inputRef={inputRef} placeholder={'Son1'} />
            <ForwardRefSon ref={forwardRefSonRef} placeholder={'ForwardRefSon'} />
        </Container>
    );
}

export default TestForwardRef;

