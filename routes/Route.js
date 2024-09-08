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
const router = express.Router();

router.post("/film/post", createFilm);
router.delete("/film/delete/:id", deleteFilm);
router.get("/film", getFilms);
router.get("/film/find/:id", getFilmById);
router.put("/film/update/:id", updateFilm);

router.get("/ticket", getTickets);
router.get("/ticket/find/:id", getTicketById);
router.post("/ticket/post", createTicket);
router.delete("/ticket/delete/:id", deleteTicket);
router.put("/ticket/update/:id", updateTicket);

router.get("/pembeli", getPembeli);
router.get("/pembeli/find/:id", getPembeliById);
router.post("/pembeli/post", createPembeli);
router.delete("/pembeli/delete/:id", deletePembeli);
router.put("/pembeli/update/:id", updatePembeli);

router.get("/pembeli", getPembeli);
export default router;
