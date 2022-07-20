
import { DataSource } from "typeorm";
import Rifa from "./rifa/Rifa";
import User from "./User/User";
import AppDataSource from "./db";
import UserService from "./User/UserService";
import app from "./routes";




AppDataSource.initialize()
.then(() => {
    console.log("Data Source has been initialized!")
})
.catch((err:any) => {
    console.error("Error during Data Source initialization", err)
})

app.get("/", function (req:any, res:any) {
  let cartelas = [];
  for (let index = 0; index < 10; index++) {
    let cartela = [];
    for (let index = 0; index < 4; index++) {
      cartela.push(
        getRandomInt(0, 9) +
          "" +
          getRandomInt(0, 9) +
          "" +
          getRandomInt(0, 9) +
          "" +
          getRandomInt(0, 9)
      );
    }
    cartelas.push(cartela);
  }
  console.log(
    getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9)
  );
  console.log(
    getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9)
  );
  console.log(
    getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9)
  );
  console.log(
    getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9) +
      "" +
      getRandomInt(0, 9)
  );

  res.send(cartelas);
});






const port:Number = 3003
app.listen(port);
console.log("O PAI TA ON...", port);

function getRandomInt(min:number, max:number):Number{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
