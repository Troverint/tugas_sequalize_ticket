import Film from "../model/FilmModel.js";
import Pembeli from "../model/PembeliModel.js";
import Screening from "../model/ScreeningModel.js";
import Ticket from "../model/TicketModel.js";
import Transaksi from "../model/TransaksiModel.js";

export const createPembeli = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const pembeli = await Pembeli.create({
      name,
      email,
      password,
    });

    res.status(200).json({ message: "pembeli berhasil didaftarkan", pembeli });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPembeli = async (req, res) => {
  try {
    const pembeli = await Pembeli.findAll({
      include: [
        {
          model: Ticket,
          as: "Tickets",
          include: [
            {
              model: Screening,
              as: "Screening",
              include: {
                model: Film,
                as: "Film",
              },
            },
          ],
        },
      ],
    });
    res.status(200).json(pembeli);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPembeliAndTransaksi = async (req, res) => {
  try {
    const pembeli = await Pembeli.findAll(
      {
        include : {
          model : Ticket,
          as : "Tickets",
          required : false,
          attributes : [],
          
          include : {
            model : Transaksi,
            as : "Transaksi"
          }
        }
      }
    );
    res.status(200).json(pembeli);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPembeliById = async (req, res) => {
  try {
    const { id } = req.params;
    const pembeli = await Pembeli.findByPk(id, {
      include: [
        {
          model: Ticket,
          as: "Tickets",
          include: [
            {
              model: Screening,
              as: "Screening",
              include: {
                model: Film,
                as: "Film",
              },
            },
          ],
        },
      ],
    });
    if (!pembeli) return res.status(404).json({ message: "Pembeli not found" });
    res.status(200).json(pembeli);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePembeli = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const [updated] = await Pembeli.update(
      { name, email, password },
      { where: { id } }
    );
    if (updated) {
      const updatedPembeli = await Pembeli.findByPk(id);
      res
        .status(200)
        .json({ message: "pembeli berhasil di update", updatedPembeli });
    } else {
      res.status(404).json({ message: "Pembeli not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePembeli = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pembeli.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "pembeli berhasil terhapus" });
    } else {
      res.status(404).json({ message: "Pembeli not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
