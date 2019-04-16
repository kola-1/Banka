import Schema from './validationSchema';
import Validator from './validator';

const { signupSchema } = Schema;
const { validator, sendError } = Validator;

const validateSignup = (req, res, next) => {
    const data = ['firstName', 'lastName', 'email', 'password', 'type'];
    const obj = {};
    obj.signup = req.body;
    const errors = validator(data, obj.signup, signupSchema);
    sendError(req, res, next, errors);
};

export default validateSignup;
