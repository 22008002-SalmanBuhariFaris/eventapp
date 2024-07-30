const db = require('../models/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err, results) => {
        if (err) throw err;
        res.send('User registered');
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) throw err;
        if (results.length === 0 || !await bcrypt.compare(password, results[0].password)) {
            return res.send('Invalid credentials');
        }

        const user = { id: results[0].id, email: results[0].email };
        const accessToken = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.cookie('token', accessToken, { httpOnly: true });
        res.send('User logged in');
    });
};

const logout = (req, res) => {
    res.clearCookie('token');
    res.send('User logged out');
};

module.exports = {
    register,
    login,
    logout
};
