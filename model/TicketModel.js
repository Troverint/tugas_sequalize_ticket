import { DataTypes } from "sequelize";
import db from "../utils/connection.js";
import Film from "./FilmModel.js";
import Pembeli from "./PembeliModel.js";
const Ticket = db.define(
  // memberikan nama model dengan nama User, secara default jika tidak memberikan tablename dibawah maka akan menjadi nama
  "Ticket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    studio: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "Ticket",
  }
);

Film.hasMany(Ticket, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Ticket.belongsTo(Film, {
  foreignKey: "FilmId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Pembeli.hasMany(Ticket, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Ticket.belongsTo(Pembeli, {
  foreignKey: "PembeliId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default Ticket;
