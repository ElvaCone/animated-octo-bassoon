import { useState } from 'react';
import { Waypoint } from 'react-waypoint';

const TestWaypoint = () => {
    const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
    const [loading, setLoading] = useState(false);

    const loadMoreItems = () => {
        setLoading(true);
        setTimeout(() => {
            const newItems = [
                `Item ${items.length + 1}`,
                `Item ${items.length + 2}`,
                `Item ${items.length + 3}`,
                `Item ${items.length + 4}`,
            ];
            setItems(prevItems => [...prevItems, ...newItems]);
            setLoading(false);
        }, 1500); // 模拟网络请求延迟
    };

    return (
        <div>
            <h1>Infinite Scroll with Waypoint</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* 每当 Waypoint 所在的 DOM 元素进入视口时，onEnter 回调函数会被调用 */}
            {!loading && <Waypoint onEnter={loadMoreItems} />}

            {loading && <p>Loading more items...</p>}
        </div>
    );
};

export default TestWaypoint;

