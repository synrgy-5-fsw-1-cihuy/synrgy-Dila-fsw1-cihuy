const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const jwtUtil = {};
jwtUtil.sign = (data) => {
    return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: '12h'});

}
module.exports = jwtUtil;
