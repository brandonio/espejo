const fetch = require("node-fetch");

const prefix = "https://api.openweathermap.org/data/2.5";
const apis = ["onecall", "air_pollution"];

exports.handler = async () => {
  try {
    const { LAT, LON, KEY } = process.env;
    const makeEndpoint = (api) =>
      `${prefix}/${api}?units=imperial&lat=${LAT}&lon=${LON}&appid=${KEY}`;
    const [weather, aqi] = await Promise.all(
      apis.map(async (api) => (await fetch(makeEndpoint(api))).json())
    );
    return { statusCode: 200, body: JSON.stringify({ weather, aqi }) };
  } catch (e) {
    return { statusCode: 500, body: e.toString() };
  }
};
