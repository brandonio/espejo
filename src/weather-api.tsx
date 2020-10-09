export const fetchWeather = async (numReqs: number): Promise<any> =>
  (await fetch(`/.netlify/functions/weather?numReqs=${numReqs}`)).json();
