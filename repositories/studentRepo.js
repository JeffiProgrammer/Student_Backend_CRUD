import { Sequelize } from "sequelize";

const sequelize = new Sequelize("student_db", "root", "Infodba100", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
