import React, { FC, useEffect, useState } from "react";

const extractValues = (t: number): string[] => {
  const dateString = new Date(t).toString();
  return [
    dateString.slice(0, 3),
    dateString.slice(8, 10),
    dateString.slice(16, 18),
    dateString.slice(19, 21),
  ];
};

export const DateAndTime: FC<any> = () => {
  const [time, setTime] = useState<number>(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1_000), 1_000);
    return () => clearInterval(interval);
  }, []);

  const [day, date, hours, minutes] = extractValues(time);

  return (
    <div className="dat-container">
      <div className="dat-date-container">
        <span className="dat-day">{day}</span>
        <span className="dat-date">{date}</span>
      </div>
      <div className="dat-time-container">
        <span className="dat-hours">{hours}</span>
        <span className="dat-minutes">{minutes}</span>
      </div>
    </div>
  );
};
