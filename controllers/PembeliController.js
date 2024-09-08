import Film from "../model/FilmModel.js";
import Pembeli from "../model/PembeliModel.js";
import Ticket from "../model/TicketModel.js";

export const createPembeli = async (req, res) => {
  try {
    const { name, email} = req.body;

    // Create Pembeli
    const pembeli = await Pembeli.create({
      name,
      email
    });

    res.status(201).json(pembeli);
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
          include : [{
            model : Film,
            as : 'Film'
          }]
      
        },
      ],
    });
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
              model: Film,
              as: "Film",
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
    const { name, email, ticketId } = req.body;

    const [updated] = await Pembeli.update(
      { name, email, TicketId: ticketId },
      { where: { id } }
    );
    if (updated) {
      const updatedPembeli = await Pembeli.findByPk(id);
      res.status(200).json(updatedPembeli);
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
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Pembeli not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
