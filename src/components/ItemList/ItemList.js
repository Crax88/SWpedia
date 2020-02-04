import React from "react";
import "./ItemList.css";

const ItemList = props => {
  const { data, onItemSelect, children: renderLabel } = props;
  const items = data.map(item => {
    const { id } = item;
    const label = renderLabel(item);
    return (
      <li
        className="list-group-item"
        key={id}
        onClick={() => {
          onItemSelect(id);
        }}
      >
        {label}
      </li>
    );
  });
  return <ul className="list-group">{items}</ul>;
};

export default ItemList;
