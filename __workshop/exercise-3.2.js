// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const request = require('request-promise');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const addressURI = encodeURI(address)
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: addressURI,
  };

   const { key, q } = requestObj

  return request(`https://api.opencagedata.com/geocode/v1/json?q=${q}&key=${key}`)
  .then((res) => JSON.parse(res))
  .then(data => data.results[0].geometry)
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
});

};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));
