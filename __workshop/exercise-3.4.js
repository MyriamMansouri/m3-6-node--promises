// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------

const request = require("request-promise");
require("dotenv").config;

const { getPositionFromAddress } = require("./exercise-3.2");
const { getIssPosition } = require("./exercise-3.1");

const getDistance = (pos1, pos2) => {
  return Math.sqrt(
    Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
  );
};

const getDistanceFromIss = (data) => {
  const [position1, position2] = data;
  myPromise = new Promise((resolve, reject) => {
    resolve(getDistance(position1, position2));
  });
  return myPromise;
};

Promise.all([
  getPositionFromAddress("123 boulevard de valmy 92700 colombes"),
  getIssPosition(),
])
  .then((data) => getDistanceFromIss(data))
  .then((res) => console.log("Distance from ISS is ", res));
