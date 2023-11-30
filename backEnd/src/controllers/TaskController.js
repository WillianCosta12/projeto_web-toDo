import Task from "../models/Task.js";

class TaskController {
  async index(req, res) {
    try {
      const tasks = await Task.findAll();

      return res.json(tasks);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar as tarefas" });
    }
  }

  async create(req, res) {
    try {
      const { content, description, priority } = req.body;

      const task = await Task.create({ content, description, priority });

      return res.status(201).json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar uma nova tarefa" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { content, description, priority } = req.body;

      const task = await Task.findByIdAndUpdate(
        id,
        { content, description, priority },
        { new: true }
      );

      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      return res.json(task);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao atualizar a tarefa" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const task = await Task.findByIdAndDelete(id);

      if (!task) {
        return res.status(404).json({ error: "Tarefa não encontrada" });
      }

      return res.json({ message: "Tarefa excluída com sucesso" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao excluir a tarefa" });
    }
  }
}

export default new TaskController();
