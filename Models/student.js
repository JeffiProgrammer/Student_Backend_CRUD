import { DataTypes } from "sequelize";

import studentRepo from "../repositories/studentRepo.js";

export const Student = studentRepo.define("Student", {
  //Student Attributes
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: "Student Fullname",
  },
  email: DataTypes.STRING,
  age: DataTypes.INTEGER,
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});
