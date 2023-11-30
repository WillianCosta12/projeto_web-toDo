import { config } from "dotenv";
import express from "express";

config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost${port}.`);
});
