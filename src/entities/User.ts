import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number = 0; // Ensure this is defined as a number type

  @Column({ unique: true })
  username: string = ""; // Ensure this is defined as a string type

  @Column()
  password: string = ""; // Ensure this is defined as a string type

  @Column({ default: "user" })
  role: string = "user"; // Ensure this is defined as a string type
}
