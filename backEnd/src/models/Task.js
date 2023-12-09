import { Model, DataTypes } from "sequelize";

import sequelize from "../config/database.js";
import UserModel from "./User.js";

class TaskModel extends Model {}

TaskModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    priority: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    modelName: "task",
    timestamps: false,
  }
);

UserModel.hasMany(TaskModel, { foreignKey: "userId", as: "task" });
TaskModel.belongsTo(UserModel, { foreignKey: "userId", as: "user" });

export default TaskModel;
