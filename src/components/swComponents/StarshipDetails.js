import React from "react";
import ItemDetails, { Record } from "../Itemdetails/ItemDetails";
import withSwapiApi from "../hocs/WithSwapiApi";

const StarshipDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record />
      {/* <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" /> */}
    </ItemDetails>
  );
};
const mapApiMethodsToProps = swapiApi => {
  return {
    getData: swapiApi.getStarship,
    getImageUrl: swapiApi.getStarshipImage
  };
};
export default withSwapiApi(StarshipDetails, mapApiMethodsToProps);
