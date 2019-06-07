import React from "react";

const getSseason = lat => {
  const month = new Date().getMonth();
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSseason(props.lat);

  console.log(season);
  return <div>Season Display</div>;
};

export default SeasonDisplay;
