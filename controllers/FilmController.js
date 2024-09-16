import Film from "../model/FilmModel.js";

export const createFilm = async (req, res) => {
  const { title, genre, description, rating, sutradara } = req.body;

  const film = await Film.create({
    title,
    genre,
    description,
    rating,
    sutradara,
  });

  res.status(200).json({message : "film berhasil ditambahkan", film});
};

export const getFilms = async (req, res) => {
  try {
    const films = await Film.findAll();
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFilmById = async (req, res) => {
  try {
    const { id } = req.params;
    const film = await Film.findByPk(id);
    if (!film) return res.status(404).json({ message: "Film not found" });
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, description, rating, sutradara } = req.body;
    const [updated] = await Film.update(
      { title, genre, description, rating, sutradara },
      { where: { id } }
    );
    if (updated) {
      const updatedFilm = await Film.findByPk(id);
      res.status(200).json({message : "film berhasil di update", updatedFilm});
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFilm = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Film.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Film berhasil dihapus" });
    } else {
      res.status(404).json({ message: "Film not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
