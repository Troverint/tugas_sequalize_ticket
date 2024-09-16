import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Film from "./FilmModel.js";
import Ticket from "./TicketModel.js";
const Screening = db.define(
  "Screening",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    jadwal_pemutaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bangku_tersedia: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "Screening",
  }
);

export default Screening;
