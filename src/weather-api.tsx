const fetchWeather = async (): Promise<any> =>
  fetch("/.netlify/functions/weather").then((res) => {
    console.log("res");
    console.log(res);
    console.log(res.body);
    return new Promise((resolve) => {
      window.setTimeout(() => resolve(res.body), 1);
    });
  });

const processWeather = (): number => 6;

export { fetchWeather, processWeather };
