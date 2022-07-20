import Rifa from "./rifa/Rifa";
import UserService from "./User/UserService";

const express = require("express");
const app = express();

app.get("/rifas", function (req:any, res:any) {
    const rifa = new Rifa(10, 1000, 200);
  
    rifa.status = true;
    res.send(rifa.status);
  });
  app.get('/users', async function (req:any, res:any) { 
     const userService  = new UserService();
     const users = await userService.getUser();
     
     res.send(users);
  })

export default app;