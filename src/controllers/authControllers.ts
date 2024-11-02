import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../entities/User";
import { generateToken } from "../utils/generateToken";

export const register = async (req: Request, res: Response) => {
  console.log("Request Body:", req.body);
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = User.create({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registred sucessfully" });
  } catch (error) {
    res.status(500).json({ message: "user registration filed" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOneBy({ username });
    if (!user) {
      res.status(400).json({ message: "Invalid username" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ message: "Invalid Password" });
      } else {
        const token = generateToken(user.id);
        res.json({ token });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Login Failed" });
  }
};
