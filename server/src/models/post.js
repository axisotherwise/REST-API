import Sequelize from "sequelize";

export default class Post extends Sequelize.Model{
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      image1: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      image2: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
      image3: {
        type: Sequelize.STRING(150),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      paranoid: false,
      underscored: false,
      modelName: "Post",
      tableName: "posts",
      charset: "utf8",
      collate: "utf8_general_ci",
    })
  }
  static associate(db) {
    db.Post.belongsTo(db.User);
  }
}