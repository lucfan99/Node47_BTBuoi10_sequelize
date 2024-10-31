import { Sequelize } from "sequelize";

// tạo object sequelize để connect tới database
const sequelize = new Sequelize(
  "app_food", // tên database
  "root", // tên username
  "1234", // password của user
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);

export default sequelize;
