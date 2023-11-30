import { Router } from "express";
import TaskController from "../controllers/TaskController.js";

const taskRoutes = Router();

taskRoutes.get("/tasks/", async (req, res) => TaskController.index(req, res));

taskRoutes.post("/tasks/", async (req, res) => TaskController.create(req, res));

taskRoutes.put("/tasks/:id", async (req, res) =>
  TaskController.update(req, res)
);

taskRoutes.delete("/tasks/:id", async (req, res) =>
  TaskController.delete(req, res)
);

export default taskRoutes;
