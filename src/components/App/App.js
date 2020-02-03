import React, { Component } from "react";
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ItemList from "../ItemList/ItemList";
import PersonDetails from "../Persondetails/PersonDetails";
import Row from "../common/Row/Row";
import SwapiAPI from "../../services/swapi_api";

import "./App.css";

export default class App extends Component {
  swapiApi = new SwapiAPI();
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
    const itemList = (
      <ItemList
        renderItem={({ name, gender, birthYear }) => {
          return `${name} (${gender}, ${birthYear})`;
        }}
        getData={this.swapiApi.getAllPeople}
        onItemSelect={this.onPersonSelect}
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <div className="app-wrapper">
        <Header />
        {randomPlanet}
        <button
          className="toggle-random-planet"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Randon Planet
        </button>
        <Row left={itemList} right={personDetails} />
      </div>
    );
  }
}
