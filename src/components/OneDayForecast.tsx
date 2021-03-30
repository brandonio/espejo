import React, { FC } from "react";
import { ColoredTemp } from "./ColoredTemp";
import { WeatherIcon } from "./WeatherIcon";
import { parseNumber } from "../utils";

export const OneDayForecast: FC<any> = ({ data }) => {
  const dateString = new Date(data.sunrise.value).toUTCString();
  const day = dateString.slice(0, 3);

  return (
    <div className="odf-container">
      <div className="odf-day-and-date">
        <span className={`odf-day ${day}`}>{day}</span>
        <span className="odf-date">{dateString.slice(5, 7)}</span>
      </div>
      <div className="odf-min-icon-max">
        <ColoredTemp size={30} temp={parseNumber(data.feels_like[0].min)} />
        <WeatherIcon size={40} icon={data.weather_code.value} />
        <ColoredTemp size={30} temp={parseNumber(data.feels_like[1].max)} />
      </div>
    </div>
  );
};
