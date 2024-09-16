import Ticket from "../model/TicketModel.js";
import Film from "../model/FilmModel.js";
import Pembeli from "../model/PembeliModel.js";
import Screening from "../model/ScreeningModel.js";
import Transaksi from "../model/TransaksiModel.js";

export const createTicket = async (req, res) => {
  const { nomor_bangku, harga, ScreeningId, PembeliId, TransaksiId } = req.body;

  try {
    let screening = await Screening.findByPk(ScreeningId);
    if (!screening) {
      return res.status(400).json({ message: "Screening not found" });
    }
    let pembeli = await Pembeli.findByPk(PembeliId);
    if (!pembeli) {
      return res.status(400).json({ message: "Pembeli not found" });
    }
    let transaki = await Transaksi.findByPk(TransaksiId);
    if (!transaki) {
      return res.status(400).json({ message: "Pembeli not found" });
    }

    const ticket = await Ticket.create({
      nomor_bangku,
      harga,
      ScreeningId: ScreeningId,
      PembeliId: PembeliId,
      TransaksiId: TransaksiId,
    });

    screening.bangku_tersedia -= 1;
    await screening.save();

    return res.status(201).json({ message: "Ticket berhasil dibuat", ticket });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [
        {
          model: Screening,
          as: "Screening",
          required: true,
          include: {
            model: Film,
            as: Film,
          },
        },
        {
          model: Pembeli,
          as: "Pembeli",
          required: true,
        },
        {
          model: Transaksi,
          as: "Transaksi",
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
    const { nomor_bangku, harga, ScreeningId, PembeliId, TransaksiId } =
      req.body;

    const [updated] = await Ticket.update(
      {
        nomor_bangku,
        harga,
        ScreeningId: ScreeningId,
        PembeliId: PembeliId,
        TransaksiId: TransaksiId,
      },
      { where: { id } }
    );
    if (updated) {
      const updatedTicket = await Ticket.findByPk(id);
      res
        .status(200)
        .json({ message: "ticked berhasil di update", updatedTicket });
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
    const screening = await Screening.findByPk(Ticket.ScreeningId);
    screening.bangku_tersedia += 1;
    await screening.save();

    const deleted = await Ticket.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({ message: "ticked berhasil terhapus" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
