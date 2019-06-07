import React from "react";

const Spiner = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{message}</div>
    </div>
  );
};

Spiner.defaultProps = {
  message: "Loading..."
};

export default Spiner;
