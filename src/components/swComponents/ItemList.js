import React from "react";
import ItemList from "../ItemList/ItemList";
import { withData, withSwapiApi, withChildFunction, compose } from "../hocs";

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

const PersonList = compose(
  withSwapiApi(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
// const PersonList = withSwapiApi(mapPersonMethodsToProps)(
//   withData(withChildFunction(renderName)(ItemList))
// );
const PlanetList = compose(
  withSwapiApi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
// const PlanetList = withSwapiApi(mapPlanetMethodsToProps)(
//   withData(withChildFunction(renderName)(ItemList))
// );
const StarshipList = compose(
  withSwapiApi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);
// const StarshipList = withSwapiApi(mapStarshipMethodsToProps)(
//   withData(withChildFunction(renderName)(ItemList))
// );

export { PersonList, PlanetList, StarshipList };
