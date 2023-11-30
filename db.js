const { Sequelize } = require("sequelize");
const config = require("./config");

const sequelize = new Sequelize(
  config.dbConfig.database,
  config.dbConfig.username,
  config.dbConfig.password,
  {
    host: config.dbConfig.host,
    dialect: config.dbConfig.dialect,
  }
);

module.exports = sequelize;
