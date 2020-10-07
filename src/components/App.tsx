import React, { FC, useEffect, useState } from "react";

// import SevenDayForecast from "./SevenDayForecast";
// import HourlyForecast from "./HourlyForecast";
import Weather from "./Weather";
import Feeds from "./Feeds";
// import Loading from "./Loading";

import { fetchWeather } from "../weather-api";

const App: FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchWeather().then((res) => setData(res));
    const interval = setInterval(
      () => fetchWeather().then((res) => setData(res)),
      180_000
    );
    return () => clearInterval(interval);
  }, []);

  return data ? (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{new Date(data[0].observation_time.value).toString()}</span>
      {/* <SevenDayForecast forecasts={data.daily} /> */}
      {/* <HourlyForecast forecasts={data.hourly} /> */}
      <Weather />
      <Feeds />
    </div>
  ) : (
    <span>Loading...</span>
    // <Loading />
  );
};

export default App;
