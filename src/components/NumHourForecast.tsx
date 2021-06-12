import React, { FC } from "react";
import { OneHourForecast } from "./OneHourForecast";

export const NumHourForecast: FC<any> = ({ data, num, withCurrent }) => (
  <div className="nhf-container">
    {data.slice(!withCurrent, num + !withCurrent).map((ohf: any, i: number) => (
      <OneHourForecast data={ohf} key={i} />
    ))}
  </div>
);
