import React, { FC } from "react";

export const ColoredTemp: FC<any> = ({ temp, size }) => (
  <span
    className="colored-temp"
    style={{ color: colors[clamp(temp)], fontSize: size }}
  >
    {temp}°
  </span>
);

const [lo, hi] = [45, 88];
const clamp = (n: number): number => -lo + (n < lo ? lo : n > hi ? hi : n);
const colors = [
  "#8f6596",
  "#8569a2",
  "#7c6dae",
  "#7271b9",
  "#6975c5",
  "#6975c5",
  "#5f79d1",
  "#5f79d1",
  "#4285f4",
  "#4285f4",
  "#4285f4",
  "#4285f4",
  "#4285f4",
  "#3d87e6",
  "#3989d8",
  "#348cc9",
  "#2f8ebb",
  "#2b90ad",
  "#26929f",
  "#229491",
  "#1d9683",
  "#189974",
  "#149b66",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#0f9d58",
  "#39a148",
  "#62a538",
  "#8caa28",
  "#b6ae18",
  "#f4b400",
  "#efa00a",
  "#ed950f",
  "#e98119",
  "#e6771e",
  "#e0582d",
  "#db4437",
];
