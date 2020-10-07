const fetch = require("node-fetch");

const fields = [
  ["moon_phase"],
  ["epa_aqi", "epa_health_concern", "epa_primary_pollutant"],
  [
    "feels_like",
    "humidity",
    "precipitation",
    "sunrise",
    "sunset",
    "temp",
    "weather_code",
  ],
].map((lst) => lst.join("%2C"));

exports.handler = async () => {
  try {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": process.env.CORS,
      },
      body: JSON.stringify(
        await Promise.all(
          // URLS is a ☺-separated string of api URLs
          process.env.URLS.split("☺").map(async (url, i) =>
            (await fetch(url + fields.slice(i).join("%2C"))).json()
          )
        )
      ),
    };
  } catch (e) {
    return { statusCode: 500, body: e.toString() };
  }
};
