import React, { FC } from "react";
import { extractValues } from "../utils";
import { ColoredTemp } from "./ColoredTemp";
import { WeatherIcon } from "./WeatherIcon";

export const WeatherAndSun: FC<any> = ({ data }): any => {
  const [
    { hours: sunriseHours, minutes: sunriseMinutes },
    { hours: sunsetHours, minutes: sunsetMinutes },
  ] = [data.sunrise, data.sunset].map((time) => extractValues(time * 1_000));
  return (
    <div className="was-container">
      <div className="sas-container">
        <span className="sun-time">
          ⬆{sunriseHours}:{sunriseMinutes}
        </span>
        <span className="sun-time">
          {sunsetHours}:{sunsetMinutes}⬇
        </span>
      </div>
      <div className="tai-container">
        <ColoredTemp size={180} temp={Math.round(data.feels_like)} />
        <WeatherIcon size={180} icon={data.weather[0].icon} />
      </div>
    </div>
  );
};
