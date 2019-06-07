import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, err: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude
        }),
      err =>
        this.setState({
          err: err.message
        })
    );
  }

  render() {
    const { lat, err } = this.state;
    return (
      <>
        {lat && <SeasonDisplay lat={lat} />}
        {err && <div>{`Error: ${err}`}</div>}
        {!lat && !err && <div>Loading</div>}
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
