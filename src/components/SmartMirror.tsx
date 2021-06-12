import React, { FC, useEffect, useState } from "react";

import { fetchWeather } from "../weather-api";
import { fakeFetch } from "../fake-weather-api";

import { NumDayForecast } from "./NumDayForecast";
import { DateAndTime } from "./DateAndTime";
import { WeatherAndSun } from "./WeatherAndSun";
import { NumHourForecast } from "./NumHourForecast";

const IS_PROD = true;

export const SmartMirror: FC = () => {
  const [data, setData] = useState<any>();

  const fetch = () => (IS_PROD ? fetchWeather : fakeFetch)().then(setData);

  useEffect(() => {
    fetch();
    const fetchInterval = setInterval(fetch, 90_000);
    return () => clearInterval(fetchInterval);
  }, []);

  return (
    <div className="smart-mirror-container">
      {!data ? (
        <span className="message">Loading...</span>
      ) : (
        <>
          <NumDayForecast num={6} data={data.weather.daily} />
          <div className="current-info-container">
            <DateAndTime />
            <WeatherAndSun data={data.weather.current} />
          </div>
          <NumHourForecast num={10} data={data.weather.hourly} />
        </>
      )}
    </div>
  );
};
