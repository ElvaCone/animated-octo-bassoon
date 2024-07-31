// yup
{
    const yup = require('yup');

    // 定义验证模式
    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        age: yup.number().min(0, 'Age must be a positive number').required('Age is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
    });

    // 验证数据
    schema.validate({ name: 'Alice', age: 25, email: 'alice@example.com' })
        .then(() => console.log('Valid data'))
        .catch(err => console.log('Validation error:', err.errors));
}

// joi
{
    const Joi = require('joi');

    // 定义验证模式
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'Name is required'
        }),
        age: Joi.number().min(0).required().messages({
            'number.min': 'Age must be a positive number',
            'any.required': 'Age is required'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Invalid email format',
            'any.required': 'Email is required'
        }),
    });

    // 验证数据
    schema.validate({ name: 'Alice', age: 25, email: 'alice@example.com' }, (err, value) => {
        if (err) {
            console.log('Validation error:', err.details.map(detail => detail.message));
        } else {
            console.log('Valid data');
        }
    });
}

// express-validator
{
    const express = require('express');
    const { body, validationResult } = require('express-validator');

    const app = express();
    app.use(express.json());

    const base64Regex = /^[A-Za-z0-9+/=]+$/;

    // 定义路由并进行验证
    app.post('/submit', [
        body('name').notEmpty().withMessage('Name is required'),
        body('age').isInt({ min: 0 }).withMessage('Age must be a positive number'),
        body('email').isEmail().withMessage('Invalid email format'),
        body('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
        body('password').isStrongPassword().withMessage('Password must be strong'),
        body('phone').optional().isMobilePhone().withMessage('Invalid phone number'),
        body('avatar').matches(base64Regex, 'i').withMessage('Invalid avatar Base64 string')
    ], (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('Data is valid');
    });

    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
}
