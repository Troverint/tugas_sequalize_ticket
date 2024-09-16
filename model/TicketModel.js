import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Film from "./FilmModel.js";
import Pembeli from "./PembeliModel.js";
import Screening from "./ScreeningModel.js";
import Pembayaran from "./TransaksiModel.js";
import Transaksi from "./TransaksiModel.js";
const Ticket = db.define(
  "Ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nomor_bangku: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    harga: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Ticket",
  }
);

//satu film memiliki bannyak screening
Film.hasMany(Screening, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Screening.belongsTo(Film, {
  foreignKey: "FilmId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//satu screening bisa untuk banyak ticket
Screening.hasMany(Ticket, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Ticket.belongsTo(Screening, {
  foreignKey: "ScreeningId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//satu pembeli bisa memiliki banyak ticket
Pembeli.hasMany(Ticket, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Ticket.belongsTo(Pembeli, {
  foreignKey: "PembeliId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

//satu ticket memiliki 1 transaksi
Transaksi.hasMany(Ticket, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Ticket.belongsTo(Transaksi, {
  foreignKey: "TransaksiId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Ticket;
