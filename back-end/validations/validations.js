const axios = require("axios");
const defaultImgUrl =
  "https://th.bing.com/th/id/OIG.5qFAzT8uFaVmRYqwFv_H?pid=ImgGn";

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
    .then((response) => {
      const results = response.data.results;
      if (results.length > 0) {
        const addressComponents = results[0].address_components;
        const nyTruck = addressComponents.some((component) => {
          return (
            component.types.includes("administrative_area_level_1") &&
            component.short_name === "NY"
          );
        });
        if (nyTruck) {
          const coords = results[0].geometry.location;
          req.body = { ...req.body, lng: coords.lng, lat: coords.lat };
          next();
        } else {
          res.status(400).json({
            error: "Only NYC food trucks can be added at this time.",
          });
        }
      } else {
        res
          .status(400)
          .json({ error: "Invalid address or location not found." });
      }
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .json({
          error: "Error occurred while geocoding. Please try again later",
        });
    });
};

module.exports = { formatter, defaultImage, setCoords };
