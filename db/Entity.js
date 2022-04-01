const Sequilize = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define(
    "entity",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequilize.INTEGER,
      },
      text: {
        type: Sequilize.STRING,
        allowNull: false,
      },
      sum: {
        type: Sequilize.INTEGER,
        allowNull: false,
      },
    },
    {
      updatedAt: false,
      tableName: "shopping",
    }
  );
};
