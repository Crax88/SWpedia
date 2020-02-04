import React from "react";
import ItemDetails, { Record } from "../Itemdetails/ItemDetails";
import withSwapiApi from "../hocs/WithSwapiApi";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record />
      {/* <Record field="rotationPeriod" label="Rotaion Period" />
      <Record field="diameter" label="Diameter" /> */}
    </ItemDetails>
  );
};
const mapApiMethodsToProps = swapiApi => {
  return {
    getData: swapiApi.getPlanet,
    getImageUrl: swapiApi.getPlanetImage
  };
};
export default withSwapiApi(PlanetDetails, mapApiMethodsToProps);
