import React from "react";
import ItemDetails, { Record } from "../Itemdetails/ItemDetails";
import withSwapiApi from "../hocs/WithSwapiApi";

const PersonDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record />
      {/* <Record field="eyeColor" label="Eye Color" /> */}
    </ItemDetails>
  );
};
const mapApiMethodsToProps = swapiApi => {
  return {
    getData: swapiApi.getPerson,
    getImageUrl: swapiApi.getPersonImage
  };
};
export default withSwapiApi(PersonDetails, mapApiMethodsToProps);
