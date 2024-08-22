import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const ForwardRefSon = forwardRef((props, ref) => {
    const inputRef = useRef(null)
    const [value, setValue] = useState('');

    const focusHandler = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => ({
        focusHandler,
        getValue: () => value,
        setValueToAaa: () => setValue('aaa')
    }))

    return <Form.Control
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
        {...props} />
})

function TestUseImperativeHandle() {
    const forwardRefSonRef = useRef(null)

    const showRef = () => {
        console.log(forwardRefSonRef)
        console.log(forwardRefSonRef.current.value)
        forwardRefSonRef.current.focusHandler()
        console.log(forwardRefSonRef.current.getValue())
        forwardRefSonRef.current.setValueToAaa()
    }

    return (
        <Container className="mt-4">
            <Button variant="primary" onClick={showRef}>
                打印ref
            </Button>

            <ForwardRefSon ref={forwardRefSonRef} placeholder={'ForwardRefSon'} />
        </Container>
    );
}

export default TestUseImperativeHandle;

