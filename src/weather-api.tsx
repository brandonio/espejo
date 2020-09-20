const fetchWeather = async (): Promise<any> =>
  fetch("/.netlify/functions/weather").then((res) => {
    console.log("res");
    // console.log(res);
    return res;
  });

const processWeather = (): number => 6;

export { fetchWeather, processWeather };
