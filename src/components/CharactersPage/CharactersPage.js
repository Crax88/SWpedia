import React, { Component } from "react";
import ItemList from "../ItemList/ItemList";
import ItemDetails from "../Itemdetails/ItemDetails";
import Row from "../common/Row/Row";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import SwapiAPI from "../../services/swapi_api";

import "./CharactersPage.css";

export default class CharactersPage extends Component {
  swapiApi = new SwapiAPI();
  state = {
    selectedId: null
  };

  onPersonSelect = selectedId => {
    this.setState({ selectedId });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelect={this.onPersonSelect}
        getData={this.swapiApi.getAllPeople}
      >
        {i => `${i.name} (${i.gender}, ${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundary>
        <ItemDetails personId={this.state.selectedId} />
      </ErrorBoundary>
    );
    return <Row left={itemList} right={personDetails} />;
  }
}
