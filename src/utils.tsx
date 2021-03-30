export const parseNumber = (d: any): number => Math.round(parseInt(d.value));

// come back to this
export const toTime = (date: any): string => {
  const time = new Date(date.value).toLocaleTimeString();
  return time.substring(0, time.lastIndexOf(":"));
};
