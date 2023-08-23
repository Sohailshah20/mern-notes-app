import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import noteRouter from "./routes/noteroute";

//created a express server instance. Make sure there is only one server in the project
const app = express();
//Defined the req/res exchange type to json
app.use(express.json());

app.use("/api/notes", noteRouter);

//This error shows when an undefined endpoint is visited
app.use((res, req, next) => {
  next(Error("Page not found"));
});


//Created a global error handler middleware for REST APIs
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An un known error occured";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({ error: errorMessage });
});

export default app;
