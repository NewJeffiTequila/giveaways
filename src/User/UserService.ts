import AppDataSource from "../db";
import User from "./User";

export default class UserService {
  //Create function get user
  async getUser() {
    const user = await AppDataSource.manager.find(User);
    return user;
  }
}
