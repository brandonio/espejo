import React, { FC } from "react";

const getDayOfWeek = (index: number) =>
  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][index];

const OneDayForecast: FC<any> = ({ forecast }) => {
  const f = forecast;
  const date = new Date(f.dt * 1000);
  const sunrise = new Date(f.sunrise * 1000);
  const sunset = new Date(f.sunset * 1000);

  const das = {
    feels_like: { day: 80.82, night: 76.64, eve: 85.14, morn: 73.63 },
    humidity: 35,
    wind_speed: 5.1,
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
    ],
    rain: { "1h": 5 },
    pop: 0,
    uvi: 7.29,
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{}</span>
        <span>{getDayOfWeek(date.getDay())}</span>
        <span>{}</span>
      </div>

      <img
        height={60}
        src={`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`}
      />
      <span>{f.weather[0].main}</span>
      <span>{f.feels_like.day}</span>
    </div>
  );
};

export default OneDayForecast;
