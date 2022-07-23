import AppDataSource from "../db";
import User from "./User";

export default class UserService {
  //Create function get user
  async getAll() {
    const user = await AppDataSource.manager.find(User);
    return user;
  }
  async getOne(id: number): Promise<User|null> {
    const user:User | null = await AppDataSource.manager.findOneBy(User, { id: id })
    return user;
  }
  async create(user: User): Promise<User> {
    const createdUser = await AppDataSource.manager.save(User, user);
    return createdUser;
  }
}
