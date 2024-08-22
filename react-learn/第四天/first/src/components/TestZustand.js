import { Button, Container } from 'react-bootstrap';
import { create } from 'zustand'

const useStore = create((set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })), // 用到老数据
    setToNewCount: (newCount) => set({ count: newCount }), // 用到传进来的数据
    addNewCount: (newCount) => set((state) => ({ count: state.count + newCount })), // 既用到老数据又用到传进来的数据
    reset: () => set({ count: 0 }), // 什么都不用
}))



function TestZustand() {
    const { count, inc, setToNewCount, reset, addNewCount } = useStore()

    return (
        <Container>
            {count}

            <Button variant="primary" onClick={inc}>
                inc
            </Button>

            <Button variant="primary" onClick={() => setToNewCount(111)}>
                setToNewCount
            </Button>

            <Button variant="primary" onClick={() => addNewCount(5)}>
                addNewCount
            </Button>

            <Button variant="primary" onClick={reset}>
                reset
            </Button>
        </Container>
    );
}

export default TestZustand;

