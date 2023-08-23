import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING!)
  .then(() => {
    console.log("connected to monogo db");
    app.listen(port, () => {
      console.log("server running on port 9000");
    });
  })
  .catch(console.error);
