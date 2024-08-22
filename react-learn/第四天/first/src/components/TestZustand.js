import { useEffect } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { create } from 'zustand'

const createCounterSlice = (set) => ({
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })), // 用到老数据
    setToNewCount: (newCount) => set({ count: newCount }), // 用到传进来的数据
    addNewCount: (newCount) => set((state) => ({ count: state.count + newCount })), // 既用到老数据又用到传进来的数据
    reset: () => set({ count: 0 }), // 什么都不用
})

const createChannelListSlice = (set) => ({
    channelList: [],
    fetchChannelList: async () => {
        const res = await fetch('http://geek.itheima.net/v1_0/channels')
        const jsonRes = await res.json()
        console.log(jsonRes)
        set({ channelList: jsonRes.data.channels })
    }
})

const useBoundStore = create((...a) => ({
    ...createCounterSlice(...a),
    ...createChannelListSlice(...a)
}))

function TestZustand() {
    const { count, inc, setToNewCount, reset, addNewCount, channelList, fetchChannelList } = useBoundStore()

    useEffect(() => {
        fetchChannelList()
    }, [fetchChannelList])

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

            <ListGroup>
                {channelList.map((channel) => (
                    <ListGroup.Item key={channel.id}>
                        {channel.name}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}

export default TestZustand;

