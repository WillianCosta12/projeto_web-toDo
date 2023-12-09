import TaskModel from "../models/Task.js";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt";

class UserController {
  // async index(req, res) {
  //   try {
  //     const tasks = await UserModel.findAll();

  //     return res.json(tasks);
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ error: "Erro ao buscar as tarefas" });
  //   }
  // }

  async login(req, res) {
    const { username, password } = req.body;

    try {
      const existingUser = await UserModel.findOne({ where: { username } });

      if (
        !existingUser ||
        !bcrypt.compareSync(password, existingUser.password)
      ) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.password
      );

      if (!passwordMatch) {
        return res.status(401).json({ message: "Credenciais inválidas" });
      }

      res.status(200).json(true);
    } catch (error) {
      console.error("Erro durante o login:", error);
      res.status(500).json({ message: "Erro interno do servidor" });
    }
  }

  async create(req, res) {
    try {
      const { username, password } = req.body;

      const existingUser = await UserModel.findOne({ where: { username } });

      if (existingUser) {
        return res
          .status(409)
          .json({ message: "O nome de usuário já está em uso." });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserModel.create({
        username,
        password: hashedPassword,
      });

      return res
        .status(201)
        .json({ message: "Usuário registrado com sucesso", user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar um novo usuário" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { username, password } = req.body;

      const user = await UserModel.findByIdAndUpdate(
        id,
        { username, password },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrada" });
      }

      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar a usuário" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const user = await UserModel.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrada" });
      }

      return res.json({ message: "Usuário excluída com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao excluir a usuário" });
    }
  }
}

export default new UserController();
