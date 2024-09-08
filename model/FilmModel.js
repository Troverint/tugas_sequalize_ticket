import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Ticket from "./TicketModel.js";
const Film = db.define(
  // memberikan nama model dengan nama User, secara default jika tidak memberikan tablename dibawah maka akan menjadi nama
  "Film",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Film",
  }
);

export default Film;
