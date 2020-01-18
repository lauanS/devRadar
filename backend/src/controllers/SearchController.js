const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async index(request, response) {
    // Buscas todos devs num raio de 10km
    // Filtrar pelas tecnologias
    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs : {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    console.log(request.query, techsArray);
    return response.json({ devs: devs })
  }
}