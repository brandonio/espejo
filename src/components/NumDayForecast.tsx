import React, { FC } from "react";
import { OneDayForecast } from "./OneDayForecast";

export const NumDayForecast: FC<any> = ({ data, num, withCurrent }) => (
  <div className="ndf-container">
    {data.slice(!withCurrent, num + !withCurrent).map((odf: any, i: number) => (
      <OneDayForecast data={odf} key={i} />
    ))}
  </div>
);
