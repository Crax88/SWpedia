import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SwapiAPI from "../../services/swapi_api";
import { PersonList, StarshipList, PlanetList } from "../swComponents/ItemList";
import PlanetDetails from "../swComponents/PlanetDetails";
import PersonDetails from "../swComponents/PersonDetails";
import StarshipDetails from "../swComponents/StarshipDetails";
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
            <PersonDetails itemId={11} />
            <PlanetDetails itemId={3} />
            <StarshipDetails itemId={10} />
            <PersonList />
            <StarshipList />
            <PlanetList />
          </div>
        </SwapiApiProvider>
      </ErrorBoundary>
    );
  }
}
