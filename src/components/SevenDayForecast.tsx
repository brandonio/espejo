import React, { FC } from "react";
import OneDayForecast from "./OneDayForecast";

const SevenDayForecast: FC<any> = ({ forecasts }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      borderRadius: 50,
      backgroundColor: "999",
    }}
  >
    {forecasts.slice(1, 6).map((f: any) => (
      <OneDayForecast forecast={f} />
    ))}
  </div>
);

export default SevenDayForecast;
