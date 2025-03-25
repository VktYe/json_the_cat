const needle = require('needle');
const args = process.argv;
const breedName = args[2];

needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response) => {
  if (error) {
    console.log('Error:', error);
  } else {
    const data = response.body;
    console.log(typeof data);
    if (data.length > 0) {
      console.log("Description: ", data[0].description);
    } else {
      console.log("Breed not found.");
    }
  }
});