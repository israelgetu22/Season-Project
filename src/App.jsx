import React from "react";
import "./App.css";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, errMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //we called setState to update.
        this.setState({ lat: position.coords.latitude });
        //we did NOT!this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }

  render() {
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.lat && this.state.errMessage) {
      return <div>Error: {this.state.errMessage} </div>;
    }
    return <div>Loading!!</div>;
  }
}

export default App;
