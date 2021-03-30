import React, { FC, useEffect, useState } from "react";

import { fetchWeather } from "../weather-api";
import { fakeFetch } from "../fake-weather-api";

import { NumDayForecast } from "./NumDayForecast";
import { DateAndTime } from "./DateAndTime";
import { WeatherAndSun } from "./WeatherAndSun";
import { SixHourForecast } from "./SixHourForecast";

const IS_PROD = false;
const fetch = IS_PROD ? fetchWeather : fakeFetch;

export const SmartMirror: FC = () => {
  const [data, setData] = useState<any[]>();

  useEffect(() => {
    fetch(3).then(setData);

    let numReqs: number;
    const counts: number[] = [0, 0];
    const targets: number[] = [3, 30];
    const reqsInterval = setInterval(() => {
      numReqs = 1;
      counts.forEach(
        (_, i) => ++counts[i] === targets[i] && ++numReqs && (counts[i] = 0)
      );
      fetch(numReqs).then((res: any) =>
        setData((d) => d?.map((x: any, i: number) => res[i] || x))
      );
    }, 120_000);

    return () => clearInterval(reqsInterval);
  }, []);

  return (
    <div className="smart-mirror-container">
      {!data ? (
        <span className="message">Loading...</span>
      ) : data[0].message ? (
        <span className="message error">{data[0].message}</span>
      ) : (
        <>
          <NumDayForecast num={6} data={data[2]} />
          <div className="current-info-container">
            <DateAndTime />
            <WeatherAndSun data={data[0]} />
          </div>
          <SixHourForecast data={data[1]} />
        </>
      )}
    </div>
  );
};
