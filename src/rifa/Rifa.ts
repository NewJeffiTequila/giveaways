import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Rifa {
  constructor(price: Number, reward: Number, amount: Number) {
    this.price = price;
    this.reward = reward;
    this.amount = amount;
  }
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: "float" })
  price: Number;
  @Column({ type: "float" })
  reward: Number;
  @Column({ type: "int" })
  amount: Number;
  @Column({ type: "boolean" })
  isProgress?: Boolean;
  @Column({ type: "int" ,nullable: true})
  winner?: Number;
  @Column({ type: "int" ,nullable: false})
  owner?: Number;
}
