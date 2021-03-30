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
    "weather_code",
  ],
].map((lst) => lst.join("%2C"));

exports.handler = async (event) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        await Promise.all(
          process.env.URLS.split("☺") // URLS is a ☺-separated string of api URLs
            .slice(0, event.queryStringParameters.numReqs)
            .map(async (url, i) =>
              (await fetch(url + fields.slice(i).join("%2C"))).json()
            )
        )
      ),
    };
  } catch (e) {
    return { statusCode: 500, body: e.toString() };
  }
};
