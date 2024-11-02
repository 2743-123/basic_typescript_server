import jwt from "jsonwebtoken";

export const generateToken = (id: number) => {
  return jwt.sign({ id }, "your_jwt_secret", { expiresIn: "1h" });
};
