import React from "react";
import { StarshipList } from "../swComponents/";
import { withRouter } from "react-router-dom";

const StarshipsPage = ({ history }) => {
  return <StarshipList onItemSelect={itemId => history.push(`${itemId}`)} />;
};

export default withRouter(StarshipsPage);
