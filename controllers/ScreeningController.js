import Film from "../model/FilmModel.js";
import Screening from "../model/ScreeningModel.js";
import Ticket from "../model/TicketModel.js";

export const createScreening = async (req, res) => {
  try {
    const { jadwal_pemutaran, studio, bangku_tersedia, FilmId } = req.body;

    const screening = await Screening.create({
      jadwal_pemutaran,
      studio,
      bangku_tersedia,
      FilmId: FilmId,
    });

    res.status(200).json({message : "jadwal berhasil dibuat",screening});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getScreening = async (req, res) => {
  try {
    const screening = await Screening.findAll({
      include: [
        {
          model: Film,
          as: "Film",
        },
      ],
    });
    res.status(200).json(screening);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getScreeningById = async (req, res) => {
  try {
    const { id } = req.params;
    const screening = await Screening.findByPk(id, {
      
          include: [{
            model: Film,
            as: "Film",
          }],
        
    });
    if (!screening)
      return res.status(404).json({ message: "Screening not found" });
    res.status(200).json( screening);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateScreening = async (req, res) => {
  try {
    const { id } = req.params;
    const { jadwal_pemutaran, studio, bangku_tersedia, FilmId } = req.body;

    const [updated] = await Screening.update({ jadwal_pemutaran, studio, bangku_tersedia, FilmId : FilmId }, { where: { id } });
    if (updated) {
      const updateScreening = await Screening.findByPk(id);
      res.status(200).json({message : "jadwal berhasil di update",updateScreening});
    } else {
      res.status(404).json({ message: "Screening not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteScreening = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Screening.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({message : "jadwal berhasil terhapus"});
    } else {
      res.status(404).json({ message: "Screening not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
