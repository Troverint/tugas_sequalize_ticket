// // import User from "../model/UserModel.js"
// import Pembeli from "../model/PembeliModel.js";
// import Ticket from "../model/TicketModel.js";
// import Film from "../model/FilmModel.js";
// // import Book from "../model/BookModel.js";
// const createSeeders = async () => {
//     const pembeli = await Pembeli.create({
//         name: "Pajri Aria",
//         email: "Pizza@gmail.com",
//     });
// const Ticket = await Film.create({
//     studio: "AB",
//     date: new Date(),
//     FilmId : Film.dataValues.id
// });
// const Film = await Film.create({
//     title: "Despicable Me",
//     genre: "comedy",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in!",
//     rating: 4,
//     ticketId : Ticket.dataValues.id
// });

// const findTicketByFilm = await Ticket.findAll({
//     where : {
//         FilmId : Film.dataValues.id
//     },
//     attributes:["studio", "date"],
//     include: [{
//         model : Film,
//         as : "Film",
//         required : true,
//         // attributes:["id", "name", "email"]
//     }]
// })
//     return findTicketByFilm;
// }

// const pembeli = await createSeeders();
// pembeli.map((a,i)=>{
//     console.log(a)
// })
// // console.log(users)

import Pembeli from "../model/PembeliModel.js";
import Ticket from "../model/TicketModel.js";
import Film from "../model/FilmModel.js";

const createSeeders = async () => {
  // Membuat film terlebih dahulu
  const film = await Film.create({
    title: "Despicable Me",
    genre: "comedy",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, in!",
    rating: 4,
  });

  // Membuat tiket setelah film dibuat, FilmId diambil dari film yang baru dibuat
  const ticket = await Ticket.create({
    studio: "AB",
    date: new Date(),
    FilmId: film.dataValues.id,
  });
  // Membuat pembeli
  const pembeli = await Pembeli.create({
    name: "Pajri Aria",
    email: "Pizza@gmail.com",
    TicketId: ticket.dataValues.id,
  });
  // Relasi antara Film dan Ticket sudah terhubung dengan FilmId pada Ticket
  const findTicketByFilm = await Ticket.findAll({
    where: {
      FilmId: film.dataValues.id,
    },
    attributes: ["studio", "date", "FilmId"],
    include: [
      {
        model: Film,
        as: "Film",
        required: true,
        // attributes: ["id", "title", "genre"]
      },
    ],
  });
  const findTransaksiByPembeli = await Pembeli.findAll({
    where: {
      TicketId: ticket.dataValues.id,
    },
    attributes: ["name", "email", "TicketId"],
    include: [
      {
        model: Ticket,
        as: "Ticket",
        required: true,
        include:[{
            model: Film,
            as:"Film"
        }]
        // attributes: ["id", "title", "genre"]
      },
    ],
  });

  return findTransaksiByPembeli;
};







const getAllData = async() =>{
    const data = await Pembeli.findAll({
        attributes: ["id", "name", "email"],
        include:[{
            model : Ticket,
            as: "Ticket",
            required:true,
            attributes: ["id", "studio", "date"],
            include:[{
                model : Film,
                as: "Film",
                required:true,
                attributes: ["id", "title", "genre", "description"],
            }]
        }]
    })
    return data
}


const pembeli = await getAllData();
pembeli.map((ticket, i) => {
    console.log(JSON.stringify(ticket, null, 2));
});
