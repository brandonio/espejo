import React, { FC, Fragment, useEffect, useState } from "react";

import Forecast from "./Forecast";
import Weather from "./Weather";
import Feeds from "./Feeds";
import { fetchWeather } from "../weather-api";

const App: FC = () => {
  const [json, setJson] = useState<string>("default string");

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather().then((res: any) => {
        console.log(res);
        console.log(JSON.stringify(res));
        setJson(JSON.stringify(res));
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <span>{json}</span>
      <Forecast />
      <Weather />
      <Feeds />
    </Fragment>
  );
};

export default App;
