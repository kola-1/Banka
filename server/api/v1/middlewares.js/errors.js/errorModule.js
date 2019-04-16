const errorData = (status, title, description, fields) => ({
    status,
    title,
    description,
    fields,
});

const errors = {
    validationError: (res, errObj) => res.status(422).json({
        error: errorData(422, 'FIELDS_VALIDATION_ERROR', 'one or more fields raised validation error', errObj),
    })
};

export default errors;
