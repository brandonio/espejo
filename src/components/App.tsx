import React, { FC, useEffect, useState } from "react";

// import FiveDayForecast from "./FiveDayForecast";
// import HourlyForecast from "./HourlyForecast";
// import Weather from "./Weather";

import { fetchWeather } from "../weather-api";

const App: FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    fetchWeather(3).then((res) => setData(res));
    const counts = [0, 0];
    const targets = [3, 30];
    const interval = setInterval(() => {
      let numReqs = 1;
      counts.map(
        (_, i) =>
          ++counts[i] === targets[i] && (numReqs += 1) && (counts[i] = 0)
      );
      fetchWeather(numReqs).then((res) =>
        setData((data: any) => data.map((d: any, i: number) => res[i] || d))
      );
    }, 120_000);
    return () => clearInterval(interval);
  }, []);
  console.log(data, "data");
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {!data ? (
        <span style={{ fontSize: 100, alignSelf: "center" }}>Loading...</span>
      ) : data[0].message ? (
        <span style={{ fontSize: 100, alignSelf: "center" }}>
          {data[0].message}
        </span>
      ) : (
        <span>{new Date(data[0].observation_time.value).toString()}</span>
      )}
    </div>
  );
};

export default App;
