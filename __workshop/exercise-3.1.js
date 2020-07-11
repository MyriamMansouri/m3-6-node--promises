// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require("request-promise");

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...
  return request(`http://api.open-notify.org/iss-now.json`)
  .then((res) => JSON.parse(res))
  .then(data => {
    return { lat: parseFloat(data.iss_position.latitude), lng: parseFloat(data.iss_position.longitude)}
  })
};
getIssPosition().then((result) => console.log(result));

module.exports = { getIssPosition }
