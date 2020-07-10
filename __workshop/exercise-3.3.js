// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
const request = require("request-promise");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    latitude: lat,
    longitude: lng,
  };

  // return ...

  const { key, latitude, longitude } = requestObj;

  return request(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${key}`
  )
    .then((res) => JSON.parse(res))
    .then((data) => data.results[0].formatted)
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
}

getAddressFromPosition("48.8584", "2.2945").then((response) =>
  console.log(response)
);
