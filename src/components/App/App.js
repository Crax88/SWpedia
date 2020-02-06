import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SwapiAPI from "../../services/swapi_api";
import { PersonsPage, PlanetsPage, StarshipsPage } from "../pages/";
import { SwapiApiProvider } from "../swapiApiContext/swapiApiContext";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { StarshipDetails } from "../swComponents";

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
          <Router>
            <div className="app-wrapper">
              <Header />
              {randomPlanet}
              <button
                className="toggle-random-planet"
                onClick={this.toggleRandomPlanet}
              >
                Toggle Randon Planet
              </button>
              <Route
                path="/"
                exact
                render={() => (
                  <h2
                    style={{
                      margin: "auto",
                      width: "30vw",
                      color: "whitesmoke"
                    }}
                  >
                    Welcome to SWpedia
                  </h2>
                )}
              />
              <Route path="/persons/:id?" component={PersonsPage} />
              <Route path="/planets" component={PlanetsPage} />
              <Route path="/starships" exact component={StarshipsPage} />
              <Route
                path="/starships/:id"
                render={({ match, location, history }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
            </div>
          </Router>
        </SwapiApiProvider>
      </ErrorBoundary>
    );
  }
}
