import { config } from "dotenv";
import express from "express";
import sequelize from "./config/database.js";

config();

const port = process.env.PORT || 3000;

const app = express();

sequelize.sync().then(() => console.log("connected to the database"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost${port}.`);
});
