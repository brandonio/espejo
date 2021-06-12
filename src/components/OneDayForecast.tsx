import React, { FC } from "react";
import { extractValues } from "../utils";
import { ColoredTemp } from "./ColoredTemp";
import { WeatherIcon } from "./WeatherIcon";

export const OneDayForecast: FC<any> = ({ data }) => {
  const { day, date } = extractValues(data.dt * 1_000);

  return (
    <div className="odf-container">
      <div className="odf-day-and-date">
        <span className={`odf-day ${day}`}>{day}</span>
        <span className={`odf-date ${day}`}>{date}</span>
      </div>
      <div className="odf-min-icon-max">
        <ColoredTemp size={30} temp={Math.round(data.temp.min)} />
        <WeatherIcon size={40} icon={data.weather[0].icon} />
        <ColoredTemp size={30} temp={Math.round(data.temp.max)} />
      </div>
    </div>
  );
};
