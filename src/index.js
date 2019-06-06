import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, err: null };

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
    return (
      <>
        <div>Latitude: {this.state.lat}</div>
        <div>Error: {this.state.err}</div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
