import React, { FC } from "react";
import { ColoredTemp } from "./ColoredTemp";
import { WeatherIcon } from "./WeatherIcon";
import { parseNumber } from "../utils";

export const ThirtyMinuteForecast: FC<any> = ({ data, index }) => (
  <div className="tmf-container">
    <span className="tmf-time">+{(index / 2).toFixed(1)}</span>
    <WeatherIcon size={30} icon={data.weather_code.value} useNight />
    <ColoredTemp size={25} temp={parseNumber(data.feels_like)} />
  </div>
);
