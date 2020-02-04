import React, { Component } from "react";
// import Preloader from "../Preloader/Preloader";
import "./ItemDetails.css";

const Record = props => {
  const { item } = props;
  const li = Object.entries(item).map(([key, value]) => {
    if (key === "id") return null;
    return (
      <li key={key} className="list-group-item">
        <span className="term">{key}</span>
        <span>{value}</span>
      </li>
    );
  });
  return <>{li}</>;

  // return (
  //   <li className="list-group-item">
  //     <span className="term">{label}:</span>
  //     <span>{item[field]}</span>
  //   </li>
  // );
};
export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }
  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId).then(item => {
      this.setState({
        item,
        image: getImageUrl(item)
      });
    });
  };
  render() {
    const { item, image } = this.state;
    if (!item) return <span>Select a item from the list</span>;
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
