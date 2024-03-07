import { body, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

const withValidationErrors = (validateValues) => {
    return [
        validateValues,
        (req, res, next) => {
            let errors = validationResult(req);
            if (!errors.isEmpty()) {
                let errorMessages = errors.array().map((error) => error.msg);
                return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errorMessages })
            }
            next();
        },
    ];
};

export const validateInput = withValidationErrors([
    body('category').notEmpty().withMessage('category is required'),
]);

export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required').isEmail().withMessage("Please enter a valid email address"),
    body('password').notEmpty().withMessage('password is required').isLength({ min: 8 }).withMessage("Password must be at least 8 characters"),
]);

export const validateLoginInput = withValidationErrors([
    body('email')
        .notEmpty()
        .withMessage('email is required')
        .isEmail()
        .withMessage('invalid email format'),
    body('password').notEmpty().withMessage('password is required'),
]);

export const validateAcivments = withValidationErrors([
    body('name').notEmpty().withMessage('name is required'),
    body('description').notEmpty().withMessage('description is required'),
    body('points').notEmpty().withMessage('points is required'),
]);