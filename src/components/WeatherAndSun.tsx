import React, { FC } from "react";
import { ColoredTemp } from "./ColoredTemp";
import { WeatherIcon } from "./WeatherIcon";
import { parseNumber, toTime } from "../utils";

export const WeatherAndSun: FC<any> = ({ data }): any => {
  const [sunrise, sunset] = [data.sunrise, data.sunset].map(toTime);
  const temp = parseNumber(data.feels_like);
  const [rain, humidity, aqi] = [
    data.precipitation,
    data.humidity,
    data.epa_aqi,
  ].map(parseNumber);
  const [moon, weather, pollutant, aqiStatus] = [
    data.moon_phase,
    data.weather_code,
    data.epa_primary_pollutant,
    data.epa_health_concern,
  ].map((t) => t.value);

  console.log(rain, humidity, aqi, moon, weather, pollutant, aqiStatus);

  return (
    <div className="was-container">
      <div className="sas-container">
        <span className="sun-time">⬆{sunrise}</span>
        <span className="sun-time">⬇{sunset}</span>
      </div>
      <div className="tai-container">
        <ColoredTemp size={200} temp={temp} />
        <WeatherIcon size={180} icon={data.weather_code.value} useNight />
      </div>
    </div>
  );
};
