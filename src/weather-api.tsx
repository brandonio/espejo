const fetchWeather = async (): Promise<any> =>
  (
    await fetch("/.netlify/functions/weather", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
  ).json();

export { fetchWeather };
