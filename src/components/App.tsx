import React, { FC, Fragment, useEffect, useState } from "react";

import Forecast from "./Forecast";
import Weather from "./Weather";
import Feeds from "./Feeds";
import { fetchWeather } from "../weather-api";

const App: FC = () => {
  const [json, setJson] = useState<JSON>();

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeather().then((json: JSON) => {
        console.log(json);
        // setJson(json);
        console.log("shalom?");
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
