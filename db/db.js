require("dotenv").config();
const Sequilize = require("sequelize");

const sequilize = new Sequilize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorsAliases: false,
    pool: {
      max: process.env.POOL_MAX,
      min: process.env.POOL_MIN,
      acquire: process.env.POOL_ACQUIRE,
      idle: process.env.POOL_IDLE,
    },
  }
);

const Entity = require("./Entity")(sequilize);

const db = {};
db.Sequilize = Sequilize;
db.sequilize = sequilize;
db.entity = Entity;

module.exports = db;
