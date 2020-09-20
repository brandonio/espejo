import React, { FC, Fragment, useEffect } from "react";

import Forecast from "./Forecast";
import Weather from "./Weather";
import Feeds from "./Feeds";
import { fetchWeather } from "../weather-api";

const App: FC = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather().then((json: JSON) => {
        console.log(json);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <Forecast />
      <Weather />
      <Feeds />
    </Fragment>
  );
};

export default App;
