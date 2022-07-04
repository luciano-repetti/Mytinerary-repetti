const { required } = require('joi')
const joi = require('joi')

const validator = (req, res, next) =>{
    const schema = joi.object({
        fullName: joi.string()
            .required()
            .messages({
                "string.empty": "This field is required"
            }),
        imgUrl: joi.string()
            .min(8)
            .required()
            .messages({
                "string.min": '"Image Url": min 8 characters',
                "string.empty": '"Image Url": This field is required"'
            }),
        mailPhone: joi.string()
            .email({minDomainSegments:2})
            .required()
            .messages({
                "string.email": '"email": incorrect format',
                "string.empty": '"mailPhone": This field is required"'
            }),
        password: joi.string()
            .min(6)
            .max(30)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                "string.min": '"password": min 8 characters',
                "string.max": '"password": max 30 characters',
                "string.empty": '"password": This field is required"'
            }),
        confirmPass: joi.any().equal(joi.ref('password'))
            .required()
            .messages({
                'any.only': 'Passwords do not match',
                "string.empty": '"confirm password": This field is required"'
            }),
        role: joi.string()
            .required(),
        from: joi.string()
            .required()
    })

    const validation = schema.validate(req.body.userDate, {abortEarly: false})
    if(validation.error) {
        return res.json({
            success: false,
            from: "validator",
            message: validation.error.details,
            test: validation
        })
    }
    next()
}

module.exports = validator;