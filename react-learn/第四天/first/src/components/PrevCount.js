import { useState } from "react";

const PrevCount = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    // 每次执行会导致count加1
    const handleClick = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    // 当需要基于前一个状态值来更新当前状态时，使用 setState 的回调形式是更可靠的。这是因为 React 的状态更新是异步的，调用 setState 时可能会合并多个更新，导致可能得到一个过时的状态值
    // 每次执行会导致count加2
    const handleClick1 = () => {
        setCount1(prevCount => prevCount + 1);
        setCount1(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
            <p>{count1}</p>
            <button onClick={handleClick1}>Increment</button>
        </div>
    );
}

export default PrevCount

