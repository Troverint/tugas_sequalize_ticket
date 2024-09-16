import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Film from "./FilmModel.js";
import Ticket from "./TicketModel.js";
const Admin = db.define(
  "Admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Admin",
  }
);

export default Admin;
