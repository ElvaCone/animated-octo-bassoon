import React, { lazy } from 'react';

// 使用 import.meta.glob 获取所有匹配的 .tsx 文件，并显式指定返回类型
const modules = import.meta.glob<{ default: React.ComponentType<any> }>('@/components/*.tsx');

// 创建一个对象来存储懒加载的组件
const lazyComponents = Object.keys(modules).reduce((components, filePath) => {
    const fileName = filePath.split('/').pop();
    const componentName = fileName ? fileName.replace(/\.\w+$/, '') : '';
    if (componentName) {
        components[componentName] = lazy(modules[filePath]); // 动态懒加载
    }
    return components;
}, {} as Record<string, React.LazyExoticComponent<React.ComponentType<any>>>);

// // 使用时可以通过组件名来获取懒加载的组件
// const TestUseState = lazyComponents['TestUseState'];
// const TestChildren = lazyComponents['TestChildren'];
// const TestUseRef = lazyComponents['TestUseRef'];
// // 依此类推...

export default lazyComponents;
