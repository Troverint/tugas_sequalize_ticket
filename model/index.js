import Ticket from "./TicketModel.js";
import Pembeli from "./PembeliModel.js";
import Film from "./FilmModel.js";
import db from "../utils/connection.js";
import Transaksi from "./TransaksiModel.js";
import Admin from "./AdminModel.js";
import Screening from "./ScreeningModel.js";
await db.sync({alter:true}); 
