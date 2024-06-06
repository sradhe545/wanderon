import UserSignUpService from "../services/userSignupService.js";
import { INTERNAL_SERVER_ERROR } from "../utils/error.js";

const userSignupService = new UserSignUpService();

export const userSignupController = async (req, res) => {
   
    try {
        const response = await userSignupService.user(req.body)
        res.status(201).json({ message: 'User created successfully', response });
    } catch (error) {
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        } else {
            console.error(error);
            res.status(500).json({ error: INTERNAL_SERVER_ERROR });
        }
    }
}