// import jwt from "jsonwebtoken";

// export const generateToken = (id: number) => {
//   return jwt.sign({ id }, "your_jwt_secret", { expiresIn: "1h" });
// };
import jwt from "jsonwebtoken";

// Use the JWT_SECRET from environment variables
export const generateToken = (id: number) => {
  const jwtSecret = process.env.JWT_SECRET; // Access the secret from environment variables
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined"); // Ensure the secret is available
  }
  return jwt.sign({ id }, jwtSecret, { expiresIn: "1h" });
};
