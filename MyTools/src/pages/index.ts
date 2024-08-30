import React, { lazy } from 'react';

// 使用 import.meta.glob 获取所有匹配的 .tsx 文件，并显式指定返回类型
const modules = import.meta.glob<{ default: React.ComponentType<any> }>('@/pages/*.tsx');

// 创建一个对象来存储懒加载的页面组件
const lazyPages = Object.keys(modules).reduce((pages, filePath) => {
    const fileName = filePath.split('/').pop();
    const pageName = fileName ? fileName.replace(/\.\w+$/, '') : '';
    if (pageName) {
        pages[pageName] = lazy(modules[filePath]); // 动态懒加载
    }
    return pages;
}, {} as Record<string, React.LazyExoticComponent<React.ComponentType<any>>>);

// // 使用时可以通过页面名来获取懒加载的组件
// const HomePage = lazyPages['HomePage'];
// const AboutPage = lazyPages['AboutPage'];
// const ContactPage = lazyPages['ContactPage'];
// // 依此类推...

export default lazyPages;
