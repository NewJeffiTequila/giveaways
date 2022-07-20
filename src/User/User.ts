import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

// Create entity User
@Entity()
export default class User {
  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({type: "varchar", length: 100})
  email: string
  @Column({type: "varchar", length: 100})
  name: string
  @Column({type: "varchar", length: 100})
  password: string
  @CreateDateColumn()
  created_at?: Date;
  @UpdateDateColumn()
  updated_at?: Date;
}
