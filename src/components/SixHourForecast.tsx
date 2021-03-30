import React, { FC } from "react";
import { ThirtyMinuteForecast } from "./ThirtyMinuteForecast";

export const SixHourForecast: FC<any> = ({ data }) => (
  <div className="shf-container">
    {data
      .slice(1)
      .filter((_: any, i: number) => i % 2 === 1)
      .map((f: any, i: number) => (
        <ThirtyMinuteForecast data={f} index={i + 1} key={i} />
      ))}
  </div>
);
