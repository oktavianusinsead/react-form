// server.js (Node.js with Express)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email, phone, password, confirmPassword, age } = req.body;

    let errors = {};

    if (!/^[A-Za-z\s]+$/.test(name)) {
        errors.name = 'Name should contain only alphabets';
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!/^\d{10}$/.test(phone)) {
        errors.phone = 'Phone number should be 10 digits';
    }

    if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    if (confirmPassword !== password) {
        errors.confirmPassword = 'Passwords do not match';
    }

    if (age < 18 || age > 100) {
        errors.age = 'Age must be between 18 and 100';
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(4000, () => {
    console.log('Server is running on port 3000');
});
