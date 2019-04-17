import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

const signToken = (data, expiredTime) => {
    // user data to sign JWT with expiration time
    const token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: expiredTime });
    return token;
};

const assignToken = (req, res, next) => {
    // get user data from req object
    const {
        firstName, lastName, email, password, type
    } = req.body;
    const token = signToken({
        firstName, lastName, email, password, type
    }, '5h');

    // add token to req object
    req.token = token;

    next();
};

export default assignToken;
