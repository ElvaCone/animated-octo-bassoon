import React from 'react'

function TestIntersectionObserver() {
    // 图片懒加载
    const images = document.querySelectorAll('img[data-src]');

    const lazyLoad = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        lazyLoad.observe(img);
    });






    // 无限滚动
    const loadMoreContent = () => {
        // 加载更多内容的逻辑
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            loadMoreContent();
        }
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
    });

    const sentinel = document.querySelector('#sentinel');
    scrollObserver.observe(sentinel);



    return (
        <div>TestIntersectionObserver</div>
    )
}

export default TestIntersectionObserver

