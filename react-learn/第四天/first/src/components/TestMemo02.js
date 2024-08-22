import React, { memo, useMemo, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

// prop是简单类型时memo判断值是否相等，prop是引用类型时memo判断引用是否相等
const MemoSon = memo(function Son({ state, list1, list2, list3 }) {
    if (state !== undefined) {
        console.log('MemoSon渲染了,state')
    } else if (list1 !== undefined) {
        console.log('MemoSon渲染了,list1')
    } else if (list2 !== undefined) {
        console.log('MemoSon渲染了,list2')
    } else if (list3 !== undefined) {
        console.log('MemoSon渲染了,list3')
    }
    return (
        <div>
            This is MemoSon.<br />
            {state !== undefined && state}
            {list1 !== undefined && list1.join(',')}
            {list2 !== undefined && list2.join(',')}
            {list3 !== undefined && list3.join(',')}
        </div>
    )
})

function TestMemo02() {
    const [state, setState] = useState(0); // useState 在每次更新状态时，会创建一个新的状态值，而不是修改原来的状态值。这是 React 的设计原则之一，称为 "immutable state"（不可变状态）。
    const list1 = [] // 每次重新渲染组件时变量都会重新创建
    const [list2, setList2] = useState([]);
    const list3 = useMemo(() => {
        return []
    }, []);

    console.log(list1.join(',')) // 每次重新渲染组件时变量都会重新创建

    return (
        <Container className="mt-4">
            <div>state:{state}</div>
            <div>list1:{list1.join(',')}</div>
            <div>list2:{list2.join(',')}</div>
            <div>list3:{list3.join(',')}</div>

            <Button variant="primary" onClick={() => setState(state + 1)}>
                增加 state
            </Button>
            <MemoSon state={state} />

            <Button variant="primary" onClick={() => list1.push(1)}>
                增加 list1
            </Button>
            <MemoSon list1={list1} />

            <Button variant="primary" onClick={() => setList2([...list2, list2.length])}>
                增加 list2
            </Button>
            <MemoSon list2={list2} />

            <Button variant="primary">
                list3维持不变
            </Button>
            <MemoSon list3={list3} />
        </Container>
    );
}

export default TestMemo02;

