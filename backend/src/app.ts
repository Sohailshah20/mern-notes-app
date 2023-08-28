import express, {NextFunction, Request, Response} from "express";
import "dotenv/config";
import noteRouter from "./routes/noteroute";
import createHttpError, {isHttpError} from "http-errors";


//created a express server instance. Make sure there is only one server in the project
const app = express()
//cors
const cors = require("cors");
app.use(cors({
    origin: "http://localhost:5173"
}))
//Defined the req/res exchange type to json
app.use(express.json());

app.use("/api/notes", noteRouter);

//This error shows when an undefined endpoint is visited
app.use((res, req, next) => {
    next(createHttpError(404, "Page not found"));
});

//Created a global error handler middleware for REST APIs
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    console.error(error);
    let errorMessage = "An un known error occured";
    let status = 500;
    if (isHttpError(error)) {
        status = error.status;
        errorMessage = error.message;
    }
    res.status(status).json({error: errorMessage});
});

export default app;
