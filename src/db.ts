import { DataSource } from "typeorm"
import Rifa from "./rifa/Rifa"
import User from "./User/User"

const AppDataSource:DataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "giveway",
    password: "123456",
    database: "giveway",
    entities: [ Rifa, User],
    synchronize: true,
  })
  
 
export default AppDataSource