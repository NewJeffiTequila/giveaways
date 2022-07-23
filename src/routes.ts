import Rifa from "./rifa/Rifa";
import User from "./User/User";
import UserService from "./User/UserService";

const express = require("express");
const app = express();
app.use(express.json()) 

app.get("/rifas", function (req: any, res: any) {
  const rifa = new Rifa(10, 1000, 200);

  rifa.status = true;
  res.send(rifa.status);
});
app.get("/users", async function (req: any, res: any) {
  const userService = new UserService();
  const users: User[] = await userService.getAll();

  res.send(users);
});
app.get("/users/:id", async function (req: any, res: any) {
  console.log(req.params.id);
  const userService = new UserService();
  const users: User | null = await userService.getOne(req.params.id);
  res.send(users);
});

//Create route express create user 
app.post("/users", async function (req: any, res: any) {
  const userService = new UserService();
  const user = new User(req.body.name , req.body.email, req.body.password);
  const createdUser = await userService.create(user);
  res.send(createdUser);
});

export default app;
