const fetch = require("node-fetch");

exports.handler = async () => {
  try {
    let data = await fetch(process.env.API_URL).then((res) => res.json());
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (e) {
    return { statusCode: 500, body: e.toString() }
  }
};
