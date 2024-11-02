import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { config } from 'dotenv';

config()

export const AppDataSource = new DataSource({
  type: "postgres",
  // url: process.env.DATABASE_URL,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
});


 
