import { DataSource } from "typeorm";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "adil",
  password: "As2743@",
  database: "adil",
  synchronize: true,
  logging: false,
  entities: [User],
});


 
