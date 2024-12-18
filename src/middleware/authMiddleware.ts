import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split("")[1];
  if (!token) return res.status(401).json({ message: "unauthorized" });

  jwt.verify(token, "your_jwt_secret", (err, user) => {
    if (err) return res.status(403).json({ message: "invalid token" });
    req.user = user;
    next();
  });
};
