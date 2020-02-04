import React from "react";
import ItemDetails, { Record } from "../Itemdetails/ItemDetails";
import SwapiAPI from "../../services/swapi_api";

const swapiApi = new SwapiAPI();
const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = swapiApi;

export const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};
export const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotaion Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};
export const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      getImageUrl={getStarshipImage}
      itemId={itemId}
      getData={getStarship}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};
