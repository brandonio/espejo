import React, { FC } from "react";
import { OneDayForecast } from "./OneDayForecast";

export const NumDayForecast: FC<any> = ({ data, num }) => (
  <div className="ndf-container">
    {data.slice(1, num + 1).map((f: any, i: number) => (
      <OneDayForecast data={f} key={i} />
    ))}
  </div>
);
