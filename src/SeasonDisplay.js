import React from "react";

const seasonConfig = {
  summer: {
    text: "Sooo hot I want to Icecream",
    iconName: "sun"
  },
  winter: {
    text: "It's too cold...",
    iconName: "snowflake"
  }
};

const getSseason = lat => {
  const month = new Date().getMonth();
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSseason(lat);
  const { text, iconName } = seasonConfig[season];

  return (
    <>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </>
  );
};

export default SeasonDisplay;
