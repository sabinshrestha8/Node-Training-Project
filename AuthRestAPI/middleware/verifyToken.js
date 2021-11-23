const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        // console.log(user);
        next();
    } catch (error) {
        res.status(401).send('Invalid Token');
    }
};

module.exports = auth;