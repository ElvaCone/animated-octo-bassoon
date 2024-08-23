import { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";

const TestUseRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const timerIdRef = useRef<number | undefined>(undefined)
    const countRef = useRef<number>(0)
    const [count, setCount] = useState(0)

    const inc = () => {
        countRef.current += 1
        countRef.current += 1 // 每次执行数值加2
        setCount(count + 1)
        setCount(count + 1) // 每次执行数值加1
        console.log(countRef.current);
        console.log(count);
    }

    useEffect(() => {
        inputRef.current?.focus()
        timerIdRef.current = setInterval(() => {
            console.log(111);
        }, 1000)

        return () => clearInterval(timerIdRef.current)
    }, [])

    return (
        <>
            This is TestUseRef.<br />
            <input type="text" ref={inputRef} />
            <Button onClick={inc}>inc</Button>
        </>
    );
}

export default TestUseRef

