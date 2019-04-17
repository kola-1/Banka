const errorData = (title, message, fields) => ({
    title,
    message,
    fields
});

const errors = {
    validationError: (res, errObj) => res.status(422).json({
        status: 422,
        error: errorData('FIELDS_VALIDATION_ERROR', 'one or more fields raised validation error', errObj),
    })
};

export default errors;
