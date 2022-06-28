import Sequelize from "sequelize";
import config from "../config/config.js";

import User from "./user.js";
import Post from "./post.js";

const db = {};
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  config.development
);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;

User.init(sequelize);
Post.init(sequelize);

User.associate(db);
Post.associate(db);

export {
  db,
  sequelize,
}