import React, { Component } from "react";
import SwapiAPI from "../../services/swapi_api";
import Preloader from "../Preloader/Preloader";
import "./ItemList.css";

export default class ItemList extends Component {
  swapiApi = new SwapiAPI();
  state = {
    peopleList: null
  };
  componentDidMount() {
    this.swapiApi.getAllPeople().then(peopleList => {
      this.setState({ peopleList });
    });
  }
  renderItems(arr) {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelect(id)}
        >
          {name}
        </li>
      );
    });
  }
  render() {
    const { peopleList } = this.state;
    if (!peopleList) return <Preloader />;
    const items = this.renderItems(peopleList);
    return <ul className="list-group item-list">{items}</ul>;
  }
}
