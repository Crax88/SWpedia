import React, { Component } from "react";
import Preloader from "../Preloader/Preloader";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import "./ItemList.css";

export default class ItemList extends Component {
  state = {
    itemList: null,
    hasError: false
  };
  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({ itemList });
    });
  }
  componentDidCatch() {
    this.setState({ hasError: true });
  }
  renderItems(arr) {
    return arr.map(item => {
      const { id } = item;
      const label = this.props.renderItem(item);
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelect(id)}
        >
          {label}
        </li>
      );
    });
  }
  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    const { itemList } = this.state;
    if (!itemList) return <Preloader />;
    const items = this.renderItems(itemList);
    return <ul className="list-group">{items}</ul>;
  }
}
