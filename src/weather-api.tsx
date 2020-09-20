const fetchWeather = async (): Promise<JSON> =>
  fetch("/.netlify/functions/weather").then((res) => res.json());

const processWeather = (): number => 6;

export { fetchWeather, processWeather };
