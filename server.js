const express = require("express");
const authRoutes = require("./routes/authRoutes");
const secureRoutes = require("./routes/secureRoutes");
const config = require("./config");
const sequelize = require("./db");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/secure", secureRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
