import express from "express";
import dotenv from "dotenv";

import { sequelize } from "./models/index.js";

import userRoutes from "./routes/user.js";

const app = express();
app.set("port", process.env.NODE_ENV || 1000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/user", userRoutes);

sequelize.sync({ force: true })
  .then(() => console.log("db connect"))
  .catch((err) => console.error(err));

app.listen(app.get("port"), () => {
  console.log(1000);
});