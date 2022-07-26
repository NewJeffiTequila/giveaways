import verifyJwt from "./auth";
import Rifa from "./rifa/Rifa";
import User from "./User/User";
import UserService from "./User/UserService";
const bcrypt = require("bcryptjs");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

app.get("/rifas", function (req: any, res: any) {
  const rifa = new Rifa(10, 1000, 200);

  res.send(rifa);
});


app.get("/users", verifyJwt, async function (req: any, res: any, next: any) {
  const userService = new UserService();
  const users: User[] = await userService.getAll();
  console.log(req.body.userId);
  res.send(users);
});
app.get("/users/:id", async function (req: any, res: any) {
  const userService = new UserService();
  const users: User | null = await userService.getOne(req.params.id);
  res.send(users);
});

//Create route express create user
app.post("/users", verifyJwt, async function (req: any, res: any) {

  const userService = new UserService();
  const user = new User(req.body.name, req.body.email, req.body.password);
  const createdUser = await userService.create(user);
  res.send(createdUser);
});

//Create route jwt auth
app.post("/auth", async function (req: any, res: any) {
  const userService = new UserService();
  const user = await userService.getUserByEmail(req.body.email);
  if (user) {
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isPasswordValid) {
      jwt.sign(
        { userId: user.id },
        "secret",
        { expiresIn: "1h" },
        (err: any, token: any) => {
          if (err) {
            res.sendStatus(500);
          } else {
            res.send({success: true, message:'Login Efetuado Com Sucesso', token: token});
          }
        }
      );
    } else {
      res.status(401).send({success: false, message:'Email ou Senha Invalidos', token: null});
    }
  } else {
    res.status(401).send({success: false, message:'Email ou Senha Invalidos', token: null});
  }
});

// Create route register user jwt token
app.post("/register", async function (req: any, res: any) {
  const userService = new UserService();
  const encryptedPassword = await bcrypt.hash(req.body.password, 10);
  const createdUser = await userService.register(
    req.body.name,
    req.body.email,
    encryptedPassword
  );

  // return new user
  res.status(201).json();
  res.send(createdUser);
});





export default app;
