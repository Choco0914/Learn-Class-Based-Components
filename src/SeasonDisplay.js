import React from "react";

const getSseason = lat => {
  const month = new Date().getMonth();
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const printText = season => {
  return season === "winter"
    ? "It's too cold..."
    : "Sooo hot I want to Icecream";
};

const SeasonDisplay = props => {
  const season = getSseason(props.lat);
  const text = printText(season);

  return <h1>{text}</h1>;
};

export default SeasonDisplay;
