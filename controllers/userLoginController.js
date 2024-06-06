import UserLoginService from "../services/userLoginService.js";
import { INTERNAL_SERVER_ERROR } from "../utils/error.js";

const userLoginService = new UserLoginService();

export const userLoginController = async (req, res) => {
  try {
    const response = await userLoginService.user(req.body);
    res.status(201).json(response);
  } catch (error) {
    if (error.statusCode) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: INTERNAL_SERVER_ERROR });
    }
  }
};
