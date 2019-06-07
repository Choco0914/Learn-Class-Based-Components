import React from "react";
import ReactDOM from "react-dom";

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
      <div>
        {lat && `Latitude: ${lat}`}
        {err && `Error: ${err}`}
        {!lat && !err && `Loading`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
