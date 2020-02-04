import React, { Component } from "react";
import Row from "../common/Row/Row";
import { PersonList, PersonDetails } from "../swComponents";

export default class PersonsPage extends Component {
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
        left={<PersonList onItemSelect={this.onItemSelect} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
