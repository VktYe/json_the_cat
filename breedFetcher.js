const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
    if (error) {
      callback(error, null);
    } else {
      const data = response.body;
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback("Breed not found.");
      }
    }
  });
};

module.exports = {
  fetchBreedDescription,
};
