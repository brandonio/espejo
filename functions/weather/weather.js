const fetch = require("node-fetch");

exports.handler = async (event, context, callback) => {
  try {
    const pass = (body) => {
      callback(null, { statusCode: 200, body: JSON.stringify(body) });
    };

    const { LAT, LON, API_KEY } = process.env;
    const url = `https://api.openweathermap.org/data/2.5/onecall?units=imperial&exclude=minutely&lat=${LAT}&lon=${LON}&appid=${API_KEY}`;
    console.log(url);
    let response = await fetch(url);
    let data = await response.json();
    pass(data);
  } catch (e) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
    await pass(error);
  }
};
