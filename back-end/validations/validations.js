const axios = require("axios");
const defaultImgUrl =
  "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";

const defaultImage = (req, res, next) => {
  req.body.image_url.length ? null : (req.body.image_url = defaultImgUrl);
  next();
};

const formatter = (req, res, next) => {
  if (req.body.name) {
    req.body.name = req.body.name
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        word.length > 2
          ? (word = word[0].toUpperCase() + word.substr(1))
          : null;
        return word;
      })
      .join(" ");
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const setCoords = async (req, res, next) => {
  const location = `${req.body.address} ${req.body.borough} ${req.body.zip}`;
  await axios
    .get("https://maps.googleapis.com/maps/api/geocode/json", {
      params: {
        address: location,
        key: process.env.MAP_API_KEY,
      },
    })
    .then((res) => {
      let coords = res.data.results[0].geometry.location;
      req.body = { ...req.body, lng: coords.lng, lat: coords.lat };
    })
    .catch((err) => {
      return err;
    });
  next();
};

module.exports = { formatter, defaultImage, setCoords };
