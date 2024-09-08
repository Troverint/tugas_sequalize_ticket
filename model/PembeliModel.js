import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Film from "./FilmModel.js";
import Ticket from "./TicketModel.js";
const Pembeli = db.define(
  // memberikan nama model dengan nama User, secara default jika tidak memberikan tablename dibawah maka akan menjadi nama
  "Pembeli",
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
  },
  {
    tableName: "Pembeli",
  }
);

export default Pembeli;
