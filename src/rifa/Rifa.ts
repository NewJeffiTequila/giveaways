import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Rifa {
  constructor(price: Number, reward: Number, amount: Number) {
    this.price = price;
    this.reward = reward;
    this.amount = amount;
  }
  @PrimaryGeneratedColumn()
  id?: number;
  price: Number;
  reward: Number;
  amount: Number;
  status?: Boolean;
  winner?: Number;
  owner?: Number;
}
