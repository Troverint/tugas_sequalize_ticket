import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Film from "./FilmModel.js";
import Ticket from "./TicketModel.js";
const Transaksi = db.define(
  "Transaksi",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    harga_total: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    waktu_pembayaran: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    metode_pembayaran: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 
  {
    tableName: "Transaksi",
  }
);

export default Transaksi;
