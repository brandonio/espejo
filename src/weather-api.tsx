const fetchWeather = async (): Promise<any> =>
  (await fetch("/.netlify/functions/weather")).json();

export { fetchWeather };
