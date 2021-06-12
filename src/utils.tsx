export const extractValues = (time: number): any => {
  const dateString = new Date(time).toString();
  return {
    day: dateString.slice(0, 3),
    month: dateString.slice(4, 7),
    date: dateString.slice(8, 10),
    hours: getHours(time),
    minutes: dateString.slice(19, 21),
    seconds: dateString.slice(22, 24),
  };
};

export const getHours = (time: number): string => {
  let hours = new Date(time).getHours();
  hours = hours % 12 || 12;
  return `${hours < 10 ? "0" : ""}${hours}`;
};
