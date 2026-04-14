import express from "express";
import { createNewTask, getTasks, getTask, updateExistingTask, deleteExistingTask } from "../controllers/task.controllers.js";
import { auth } from "../auth/middleware.js";

const taskRoutes = express.Router();

taskRoutes.post("/create",auth, createNewTask);
taskRoutes.get("/", getTasks);
taskRoutes.get("/:id", getTask);
taskRoutes.put("/update/:id",auth, updateExistingTask);
taskRoutes.delete("/delete/:id",auth, deleteExistingTask);

export default taskRoutes;