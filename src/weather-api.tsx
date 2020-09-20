const fetchWeather = async (): Promise<any> =>
  await fetch("/.netlify/functions/weather")
    .then((res) => res.json())
    .catch((e) => console.log(e));

const processWeather = (): number => 6;

export { fetchWeather, processWeather };
