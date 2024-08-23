import { useState } from "react";
import { Button } from "react-bootstrap";

type User = {
    name: string,
    age: number,
    address?: string
}

const TestUseState = () => {
    const [user, setUser] = useState<User | null>(null)

    const changeUser = () => {
        setUser(null)
        setUser({
            name: 'Tom',
            age: 18
        })
    }

    return (
        <>
            This is TestUseState.<br />
            name: {user?.name}, age: {user?.age}<br />
            <Button onClick={changeUser}>changeUser</Button>
        </>
    );
}

export default TestUseState

