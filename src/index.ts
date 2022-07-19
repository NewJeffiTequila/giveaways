const express = require("express");
import Rifa from "./rifa/Rifa";
const app = express();

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

app.get("/rifas", function (req:any, res:any) {
  const rifa = new Rifa(10, 1000, 200);
  res.send(rifa);
});




app.listen(3001);
console.log("O PAI TA ON...");

function getRandomInt(min:number, max:number):Number{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
