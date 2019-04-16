import Joi from 'joi';
import Errors from '../errors.js/errorModule';

const { validationError } = Errors;

const validator = (data, obj, schema) => {
    const errObj = {};
    let isError = false;
    data.forEach((val) => {
        const { error } = Joi.validate({ val: obj[val] }, { val: schema[val] });
        if (error !== null) {
            isError = true;
            errObj[val] = error.details[0].message.replace('"val"', val);
        }
    });

    if (isError) {
        return errObj;
    }

    return null;
};

const sendError = (req, res, next, errors) => ((errors !== null)
    ? validationError(res, errors) : next());

export default { validator, sendError };
