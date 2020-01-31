import React, { Component } from "react";
import SwapiAPI from "../../services/swapi_api";
import Preloader from "../Preloader/Preloader";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PlanetView from "./PlanetView";

import "./RandomPlanet.css";

export default class RandomPlanet extends Component {
  swapiAPI = new SwapiAPI();
  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePlanet();
    setInterval(this.updatePlanet, 5000);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiAPI
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };
  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const preloader = loading ? <Preloader /> : null;
    const planetView = hasData ? <PlanetView planet={planet} /> : null;
    const errorMsg = error ? <ErrorIndicator /> : null;
    return (
      <div className="random-planet jumbotron rounded">
        {preloader}
        {planetView}
        {errorMsg}
      </div>
    );
  }
}
