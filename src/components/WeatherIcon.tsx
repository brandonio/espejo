import React, { FC } from "react";

const baseUrl =
  "https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/master/color";

const iconMap: any = {
  "01d": "clear_day",
  "01n": "clear_night",
  "02d": "partly_cloudy_day",
  "02n": "partly_cloudy_night",
  "03d": "mostly_cloudy",
  "03n": "mostly_cloudy",
  "04d": "cloudy",
  "04n": "cloudy",
  "09d": "drizzle",
  "09n": "drizzle",
  "10d": "rain",
  "10n": "rain",
  "11d": "tstorm",
  "11n": "tstorm",
  "13d": "snow",
  "13n": "snow",
  "50d": "fog",
  "50n": "fog",
};

export const WeatherIcon: FC<any> = ({ icon, size }) => (
  <img
    className="weather-icon"
    src={`${baseUrl}/${iconMap[icon]}.svg`}
    style={{ height: size }}
    alt={icon}
  />
);
