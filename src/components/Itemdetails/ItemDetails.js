import React, { Component } from "react";
import Preloader from "../Preloader/Preloader";
import "./ItemDetails.css";

const Record = props => {
  const { item } = props;
  const li = Object.entries(item).map(([key, value]) => {
    if (key === "id") return null;
    key = key.charAt(0).toUpperCase() + key.slice(1);
    return (
      <li key={key} className="list-group-item">
        <span className="term">{key}:</span>
        <span>{value}</span>
      </li>
    );
  });
  return <>{li}</>;
};
export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: false
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
    }
  }
  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item),
        loading: false
      });
    });
  };
  render() {
    const { item, image, loading } = this.state;
    if (loading) return <Preloader />;
    if (!item) return <span>Select an item from the list</span>;
    const { name } = item;
    return (
      <div className="item-wrapper">
        <img className="item-image" src={image} alt="avatar" />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, child => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
