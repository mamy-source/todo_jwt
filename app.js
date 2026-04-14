import express from "express";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes user
app.use("/user", userRoutes);

//route todo
app.use("/todos", taskRoutes);



export default app;