import Ticket from "../model/TicketModel.js";
import Film from "../model/FilmModel.js";
import Pembeli from "../model/PembeliModel.js";

export const createTicket = async (req, res) => {
  const { studio, date, FilmId , PembeliId} = req.body;

  try {
    // Membuat film baru jika filmId tidak diberikan
    let film = await Film.findByPk(FilmId);
    if (!film) {
      return res.status(400).json({ message: "Film not found" });
    }
    let pembeli = await Pembeli.findByPk(PembeliId);
    if (!pembeli) {
      return res.status(400).json({ message: "Pembeli not found" });
    }

    // Membuat tiket
    const ticketDate = date || new Date();
    const ticket = await Ticket.create({
      studio,
      date: ticketDate,
      FilmId: FilmId,
      PembeliId: PembeliId,
    });

    // Membuat pembeli secara otomatis jika data pembeli dihapus dari request
    // // Asumsikan pembeli dibuat dengan data default atau bisa dikustomisasi
    // await Pembeli.create({
    //   name: "Default Pembeli",
    //   email: "default@example.com",
    //   TicketId: Ticket.id,
    // });

    res.status(201).json({
      message: "Ticket created successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [
        {
          model: Film,
          as: "Film",
          required: true,
        },
        {
          model: Pembeli,
          as: "Pembeli",
          required: true,
        },
      ],
    });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Ticket.findByPk(id, {
      include: [
        {
          model: Film,
          as: "Film",
        },
        {
          model: Pembeli,
          as: "Pembeli",
        },
      ],
    });
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const { studio, date, FilmId, PembeliId } = req.body;

    const [updated] = await Ticket.update(
      { studio, date, FilmId: FilmId, PembeliId : PembeliId },
      { where: { id } }
    );
    if (updated) {
      const updatedTicket = await Ticket.findByPk(id);
      res.status(200).json(updatedTicket);
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Ticket.destroy({ where: { id } });
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
