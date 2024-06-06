import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  INVALID_PASSWORD,
  USER_DOES_NOT_EXIST,
} from "../utils/error.js";

class UserLoginService {
  async user(data) {
    const { email, password } = data;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw { statusCode: 400, message: USER_DOES_NOT_EXIST };
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw { statusCode: 400, message: INVALID_PASSWORD };
      }
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "3h",
      });
      return { message: "Login successful", token: token };
    } catch (err) {
      throw err;
    }
  }
}

export default UserLoginService
