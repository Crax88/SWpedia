import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../Persondetails/PersonDetails";

export default class App extends Component {
  state = {
    selectedPerson: null,
    showRandomPlanet: true
  };
  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };
  onPersonSelect = id => {
    this.setState({
      selectedPerson: id
    });
  };
  render() {
    const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    return (
      <div>
        <Header />
        {randomPlanet}
        <button
          className="toggle-planet btn btn-warning btn-lg mb-2"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Randon Planet
        </button>
        <div className="row mb-2">
          <div className="col-md-6">
            <ItemList onItemSelect={this.onPersonSelect} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
