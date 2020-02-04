import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SwapiAPI from "../../services/swapi_api";
import { PersonsPage, PlanetsPage, StarshipsPage } from "../pages/";
import { SwapiApiProvider } from "../swapiApiContext/swapiApiContext";

import "./App.css";

export default class App extends Component {
  swapiApi = new SwapiAPI();
  state = {
    showRandomPlanet: true
  };
  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };
  render() {
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <ErrorBoundary>
        <SwapiApiProvider value={this.swapiApi}>
          <div className="app-wrapper">
            <Header />
            {randomPlanet}
            <button
              className="toggle-random-planet"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Randon Planet
            </button>
            <PersonsPage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiApiProvider>
      </ErrorBoundary>
    );
  }
}
