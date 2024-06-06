import User from "../model/user.js";
import bcrypt from "bcrypt";
import validator from "validator";
import {
  EMAIL_IS_NOT_VALID,
  USER_ALREADY_EXISTS,
} from "../utils/error.js";

class UserSignUpService {
  async user(data) {
    const { email, password } = data;
    if (!validator.isEmail(email)) {
      throw { statusCode: 400, message: EMAIL_IS_NOT_VALID };
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      throw { statusCode: 409, message: USER_ALREADY_EXISTS };
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ email, password: hashedPassword });
      await user.save();
      return user;
    } catch (err) {
      throw err;
    }
  }
}

export default UserSignUpService
