import React from "react";
import ItemList from "../ItemList/ItemList";
import withData from "../hocs/WithData";
import withSwapiApi from "../hocs/WithSwapiApi";

const withChildFunction = (Wrapped, fn) => {
  return props => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
const renderName = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = swapiApi => {
  return {
    getData: swapiApi.getAllPeople
  };
};

const mapPlanetMethodsToProps = swapiApi => {
  return {
    getData: swapiApi.getAllPlanets
  };
};

const mapStarshipMethodsToProps = swapiApi => {
  return {
    getData: swapiApi.getAllStarships
  };
};

export const PersonList = withSwapiApi(
  withData(withChildFunction(ItemList, renderName)),
  mapPersonMethodsToProps
);
export const PlanetList = withSwapiApi(
  withData(withChildFunction(ItemList, renderName)),
  mapPlanetMethodsToProps
);
export const StarshipList = withSwapiApi(
  withData(withChildFunction(ItemList, renderName)),
  mapStarshipMethodsToProps
);
