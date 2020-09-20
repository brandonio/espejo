exports.handler = async (_, _) => {
  try {
    console.log("testing");
    const { LAT, LON, API_KEY } = process.env;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/oncecall?units=imperial&exclude=minutely&lat=${LAT}&lon=${LON}&appid=${API_KEY}`);
    let data = response.json();
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: e.toString() }
  }
}
