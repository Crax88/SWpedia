import React from "react";
import ItemList from "../ItemList/ItemList";
import SwapiAPI from "../../services/swapi_api";
import withData from "../hocs/WithData";

const swapiApi = new SwapiAPI();

const { getAllPeople, getAllPlanets, getAllStarships } = swapiApi;

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
const renderName = ({ name }) => <span>{name}</span>;

export const PersonList = withData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
export const PlanetList = withData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
export const StarshipList = withData(
  withChildFunction(ItemList, renderName),
  getAllStarships
);
