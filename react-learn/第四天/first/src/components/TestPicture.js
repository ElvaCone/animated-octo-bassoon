import React from 'react';

function TestPicture() {
    return (
        <>
            <picture>
                <source srcSet="https://www.gstatic.com/webp/gallery/1.webp" type="image/webp" />
                <source srcSet="https://www.gstatic.com/webp/gallery/1.jpg" type="image/jpeg" />
                <img src="https://www.gstatic.com/webp/gallery/2.jpg" alt="示例图片" />
            </picture>
        </>
    );
}

export default TestPicture;

