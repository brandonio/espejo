const fetch = require('node-fetch');

exports.handler = async (event, _) => {
  try {
    const { LAT, LON, API_KEY } = process.env;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?units=imperial&exclude=minutely&lat=${LAT}&lon=${LON}&appid=${API_KEY}`);
    let data = await response.json();
    console.log("shalom data: " + data);
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: e.toString() }
  }
}
