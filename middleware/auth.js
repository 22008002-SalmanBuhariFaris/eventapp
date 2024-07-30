const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.cookies?.token; // Use optional chaining to safely access the token

    if (!token) {
        return res.redirect('/login.html');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.redirect('/login.html');
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
