import React, { FC } from "react";

export const WeatherIcon: FC<any> = ({ icon, size, useNight }) => (
  <img
    className="weather-icon"
    src={`${baseUrl}/${adjust(icon, useNight)}.svg`}
    style={{ height: size }}
    alt={icon}
  />
);

const baseUrl =
  "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/master/color";
const timeDependentIcons = ["clear", "mostly_clear", "partly_cloudy"];

const adjust = (icon: string, useNight: boolean): string =>
  timeDependentIcons.includes(icon)
    ? `${icon}_${useNight ? "night" : "day"}`
    : icon;
