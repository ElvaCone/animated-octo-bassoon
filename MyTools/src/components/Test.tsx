import React from 'react';
import { List, InfiniteLoader, IndexRange, ListRowRenderer } from 'react-virtualized';

// 使用泛型为数组生成一个指定长度的数组，填充内容为 "Item {index + 1}"
const list: (string | undefined)[] = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);

// 渲染每一行的函数
const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style} className="list-item">
        {list[index]}
    </div>
);

// 判断某一行是否已经加载
function isRowLoaded({ index }: { index: number }): boolean {
    return !!list[index];
}

// 加载更多行数据的函数
async function loadMoreRows({ startIndex, stopIndex }: IndexRange): Promise<void> {
    // 模拟异步加载数据
    await new Promise((resolve) => setTimeout(resolve, 1000));
    for (let i = startIndex; i <= stopIndex; i++) {
        list[i] = `Item ${i + 1}`;
    }
}

const Test: React.FC = () => {
    return (
        <InfiniteLoader
            isRowLoaded={isRowLoaded}
            loadMoreRows={loadMoreRows}
            rowCount={list.length}
        >
            {({ onRowsRendered, registerChild }) => (
                <List
                    width={300}
                    height={400}
                    rowCount={list.length}
                    rowHeight={35}
                    onRowsRendered={onRowsRendered}
                    ref={registerChild}
                    rowRenderer={rowRenderer}
                />
            )}
        </InfiniteLoader>
    );
}

export default Test;

