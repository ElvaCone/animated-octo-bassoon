// multer
{
    const express = require('express');
    const multer = require('multer');
    const path = require('path');

    const app = express();

    // 配置 multer
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    });

    const upload = multer({
        storage: storage,
        fileFilter: function (req, file, cb) {
            // 只允许上传图片文件
            const filetypes = /jpeg|jpg|png/;
            const mimetype = filetypes.test(file.mimetype);
            const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb(new Error('Only images are allowed'));
            }
        },
        limits: { fileSize: 1000000 } // 限制文件大小为 1MB
    });

    // 单文件上传
    app.post('/upload-single',
        upload.single('file'), // file 是表单字段的名称，上传的文件会被存储在 req.file 中
        (req, res) => {
            res.send('File uploaded successfully');
        },
        (err, req, res, next) => {
            // 错误处理
            res.status(400).send({ error: err.message });
        });

    // 多文件上传
    app.post('/upload-multiple', upload.array('files', 3), (req, res) => { // files 是表单字段的名称，3 是文件的最大数量，上传的文件会被存储在 req.files 中
        res.send('Files uploaded successfully');
    });

    // 处理多个表单字段上传的文件
    app.post('/upload-fields', upload.fields([ // 上传的文件会被存储在 req.files 中
        { name: 'avatar', maxCount: 1 }, // name 是字段名称，maxCount 是文件的最大数量
        { name: 'gallery', maxCount: 8 }
    ]), (req, res) => {
        res.send('Files uploaded successfully');
    });

    // 启动服务器
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}