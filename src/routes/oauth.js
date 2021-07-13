require('dotenv').config();
import jwt from 'jsonwebtoken';

let authenticateToken = (req, res, next) => {
    const token = req.cookies[process.env.COOKIE_SECRET];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })

}

let checkAccessToken = (token) => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

let generateAccessToken = (user) => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' })
};

module.exports = {
    authenticateToken,
    generateAccessToken,
    checkAccessToken
};