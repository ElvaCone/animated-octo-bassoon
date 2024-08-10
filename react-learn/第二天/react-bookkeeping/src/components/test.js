import React, { useState } from 'react';

function MyInputComponent() {
    // 使用 useState 创建一个状态变量
    const [inputValue, setInputValue] = useState('');

    // 处理输入变化的函数
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}   // 绑定状态值到输入框
                onChange={handleInputChange} // 输入框内容变化时更新状态
            />
            <p>You typed: {inputValue}</p>  {/* 实时显示输入的内容 */}
        </div>
    );
}

export default MyInputComponent;
