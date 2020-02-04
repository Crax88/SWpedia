import React, { Component } from "react";
import Row from "../common/Row/Row";
import { PlanetList, PlanetDetails } from "../swComponents/";

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };
  onItemSelect = selectedItem => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelect={this.onItemSelect} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    );
  }
}
