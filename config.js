require("dotenv").config();

module.exports = {
  secretKey: process.env.SECRET_KEY,
  dbConfig: {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
  rateLimit: {
    windowMs: 60 * 1000,
    max: 5,
  },
};
