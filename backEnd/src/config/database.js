import { Sequelize } from "sequelize";

const sequelize = new Sequelize("crud-kanban", "user", "password", {
  dialect: "sqlite",
  storage: "./src/database/crud_kanban.sqlite",
});

export default sequelize;
