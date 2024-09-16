import express from "express";
import {
  createFilm,
  deleteFilm,
  getFilmById,
  getFilms,
  updateFilm,
} from "../controllers/FilmController.js";
import {
  createPembeli,
  deletePembeli,
  getPembeli,
  getPembeliAndTransaksi,
  getPembeliById,
  updatePembeli,
} from "../controllers/PembeliController.js";
import {
  createTicket,
  deleteTicket,
  getTicketById,
  getTickets,
  updateTicket,
} from "../controllers/TicketController.js";
import {
  createScreening,
  deleteScreening,
  getScreening,
  getScreeningById,
  updateScreening,
} from "../controllers/ScreeningController.js";
import {
  createTransaksi,
  deleteTransaksi,
  getTransaksi,
  getTransaksiById,
  updateTransaksi,
} from "../controllers/TransaksiController.js";
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAdminById,
  updateAdmin,
} from "../controllers/AdminController.js";
const router = express.Router();


//film
router.get("/film/find/:id", getFilmById);
router.get("/film", getFilms);

//ticket
router.get("/ticket", getTickets);
router.get("/ticket/find/:id", getTicketById);


//pembeli
router.get("/pembeli", getPembeli);
router.get("/pembeli/transaksi", getPembeliAndTransaksi);
router.get("/pembeli/find/:id", getPembeliById);


//screening
router.get("/screening", getScreening);
router.get("/screening/find/:id", getScreeningById);

//transaksi
router.get("/transaksi", getTransaksi);
router.get("/transaksi/find/:id", getTransaksiById);

//kelola admin
router.get("/admin", getAdmin);
router.get("/admin/:id", getAdminById);
router.post("/admin/post", createAdmin);
router.delete("/admin/delete/:id", deleteAdmin);
router.put("/admin/update/:id", updateAdmin);

//admin kelola film
router.post("/admin/film/post", createFilm);
router.delete("/admin/film/delete/:id", deleteFilm);
router.put("/admin/film/update/:id", updateFilm);

//admin kelola pembeli
router.post("/admin/pembeli/post", createPembeli);
router.delete("/admin/pembeli/delete/:id", deletePembeli);
router.put("/admin/pembeli/update/:id", updatePembeli);

//admin kelola pembeli
router.post("/admin/screening/post", createScreening);
router.delete("/admin/screening/delete/:id", deleteScreening);
router.put("/admin/screening/update/:id", updateScreening);

//admin kelola screening
router.post("/admin/transaksi/post", createTransaksi);
router.delete("/admin/transaksi/delete/:id", deleteTransaksi);
router.put("/admin/transaksi/update/:id", updateTransaksi);

//admin kelola ticket
router.post("/admin/ticket/post", createTicket);
router.delete("/admin/ticket/delete/:id", deleteTicket);
router.put("/admin/ticket/update/:id", updateTicket);

export default router;
