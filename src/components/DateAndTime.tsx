import React, { FC, useEffect, useState } from "react";
import { extractValues } from "../utils";

export const DateAndTime: FC<any> = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1_000);
    return () => clearInterval(interval);
  }, []);

  const { day, month, date, hours, minutes, seconds } = extractValues(time);

  return (
    <div className="dat-container">
      <div className="dat-date-container">
        <span className="dat-day">{day}</span>
        <span className="dat-date">{date}</span>
        <span className="dat-month">{month}</span>
      </div>
      <div className="dat-time-container">
        <span className="dat-hours">{hours}</span>
        <span className="dat-minutes">{minutes}</span>
        <span className="dat-seconds">{seconds}</span>
      </div>
    </div>
  );
};
