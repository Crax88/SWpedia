import React, { Component } from "react";
import Row from "../common/Row/Row";
import { StarshipDetails, StarshipList } from "../swComponents/";

export default class StarshipsPage extends Component {
  state = {
    selectedItem: null
  };
  omItemSelect = selectedItem => {
    this.setState({ selectedItem });
  };
  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<StarshipList onItemSelect={this.onItemSelect} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
