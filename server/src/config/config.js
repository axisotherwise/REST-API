import dotenv from "dotenv";

export default {
  development: {
    username: "root",
    password: "20220628",
    database: "api",
    host: "3.95.50.72",
    dialect: "mysql",
    logging: false,
  },
  production: {
    username: "root",
    password: "20220628",
    database: "api",
    host: "3.95.50.72",
    dialect: "mysql",
    logging: true,
  },
}