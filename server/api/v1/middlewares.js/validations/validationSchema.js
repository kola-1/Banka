import Joi from 'joi';

// regex that matches only alphabets with no space and is case insensitive
const nameRegex = /^[a-zA-Z]+$/i;

const nameObject = name => ({
    name,
});

const Schema = {
    signupSchema: {
        firstName: Joi.string().regex(nameRegex, nameObject('case insensitive alphabets without space')).min(3).max(25)
            .required(),
        lastName: Joi.string().regex(nameRegex, nameObject('case insensitive alphabets without space')).min(3).max(25)
            .required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required(),
        type: Joi.string().valid('client').required()
    },
    signinSchema: {
        email: Joi.string().email().required(),
        password: Joi.string().min(8).required()
    },
};

export default Schema;
