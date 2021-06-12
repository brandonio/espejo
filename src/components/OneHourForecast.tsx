import React, { FC } from "react";
import { getHours } from "../utils";
import { ColoredTemp } from "./ColoredTemp";
import { WeatherIcon } from "./WeatherIcon";

export const OneHourForecast: FC<any> = ({ data }) => (
  <div className="ohf-container">
    <span className="ohf-time">{getHours(data.dt * 1_000)}</span>
    <WeatherIcon size={35} icon={data.weather[0].icon} />
    <ColoredTemp size={30} temp={Math.round(data.feels_like)} />
  </div>
);
