import Film from "../model/FilmModel.js";
import Ticket from "../model/TicketModel.js";
import Transaksi from "../model/TransaksiModel.js";
import Screening from "../model/ScreeningModel.js";
export const createTransaksi = async (req, res) => {
  const { harga_total, waktu_pembayaran, metode_pembayaran, status, TicketId } = req.body;
  let ticket = await Ticket.findByPk(TicketId);

  const waktu_bayar = waktu_pembayaran || new Date();
  const transaksi = await Transaksi.create({
    harga_total ,
    waktu_pembayaran: waktu_bayar,
    metode_pembayaran,
    status
  });

  res.status(201).json({message : "transaksi berhasil dibuat", transaksi});
};

export const getTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
      include : {
        model : Ticket,
        as : "Tickets"
      }
    });
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransaksiById = async (req, res) => {
  try {
    const { id } = req.params;
    const transaksi = await Transaksi.findByPk(id,{
      include : {
        model : Ticket,
        as : "Tickets"
      }
    });
    if (!transaksi)
      return res.status(404).json({ message: "Transaksi not found" });
    res.status(200).json(transaksi);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const { harga_total, waktu_pembayaran,metode_pembayaran, status } = req.body;
    const [updated] = await Transaksi.update(
      { harga_total, waktu_pembayaran,metode_pembayaran, status},
      { where: { id } }
    );
    if (updated) {
      const updatedTransaksi = await Transaksi.findByPk(id);
      res.status(200).json({message : "transaksi berhasil di update", updatedTransaksi});
    } else {
      res.status(404).json({ message: "Transaksi not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTransaksi = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Transaksi.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json({message : "transaksi berhasil dihapus"});
    } else {
      res.status(404).json({ message: "Transaksi not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
