import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SwapiAPI from "../../services/swapi_api";
import { PersonList, StarshipList, PlanetList } from "../swComponents/ItemList";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from "../swComponents/Details";
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
    // const personDetails = (
    //   <ItemDetails
    //     getImageUrl={this.swapiApi.getPersonImage}
    //     itemId={11}
    //     getData={this.swapiApi.getPerson}
    //   >
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />
    //   </ItemDetails>
    // );
    // const starshipDetails = (
    //   <ItemDetails
    //     getImageUrl={this.swapiApi.getStarshipImage}
    //     itemId={2}
    //     getData={this.swapiApi.getStarship}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //   </ItemDetails>
    // );
    return (
      <ErrorBoundary>
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
          <StarshipDetails itemId={9} />
          <PersonList />
          <StarshipList />
          <PlanetList />
        </div>
      </ErrorBoundary>
    );
  }
}
