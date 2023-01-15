import { NextFunction,Request,Response } from "express";
import { signUpType } from "../../utils/types/signupType";
import { TypedRequestBody } from "../../utils/types/typedRequestBody";
import { body, validationResult } from "express-validator";

export const signUp = (body('name').isString().isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('username').isString().isLength({ min: 3 }).withMessage("userbame must be at least 3 characters long"),
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'), async (req: TypedRequestBody<signUpType>, res: Response, next: NextFunction)=>{

    try {

        const { username, email, password, name } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
    } catch (err) {
        next(err)
    }


    }) 