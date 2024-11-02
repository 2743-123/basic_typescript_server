import express, { Request, Response } from "express";
import { AppDataSource } from "./config/database"; // Adjust the path according to your structure
import "reflect-metadata"; // Required for TypeORM decorators
import authRoutes from "./routes/authRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Initialize the database connection
AppDataSource.initialize()
  .then(() => {
    console.log("DB_HOST:", process.env.DB_HOST);
    console.log("DB_PORT:", process.env.DB_PORT);
    console.log("DB_USER:", process.env.DB_USER);
    console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
    console.log("DB_NAME:", process.env.DB_NAME)

    console.log("Database connected!");
;


    // Start the Express server only after a successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })

  
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    
  });

// Sample route
app.get("/api", (req: Request, res: Response) => {
  res.send("Vercel server is running");
});

app.use("/api/auth", authRoutes);

// Export the app for testing or further usage
export default app;
