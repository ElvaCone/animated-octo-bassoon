const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    style: {
        sass: {
            loaderOptions: {
                // additionalData这个选项会在每个 Sass 文件的开头注入指定的内容。通过这个选项，你可以在每个 Sass 文件中自动导入自定义变量文件和 Bootstrap 的主 Sass 文件
                additionalData: `
          @import "${path.resolve(__dirname, 'src/styles/_variables.scss')}";
          @import "~bootstrap/scss/bootstrap";
        `,
            },
        },
    },
};
