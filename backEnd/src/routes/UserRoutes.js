import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRoutes = Router();

// taskRoutes.get("/user/", async (req, res) => UserController.index(req, res));

userRoutes.post("/login/", async (req, res) => UserController.login(req, res));

userRoutes.post("/register/", async (req, res) =>
  UserController.create(req, res)
);

// taskRoutes.put("/user/:id", async (req, res) =>
//   UserController.update(req, res)
// );

// taskRoutes.delete("/user/:id", async (req, res) =>
//   UserController.delete(req, res)
// );

export default userRoutes;
