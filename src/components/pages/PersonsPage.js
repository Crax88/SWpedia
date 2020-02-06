import React from "react";
import Row from "../common/Row/Row";
import { PersonList, PersonDetails } from "../swComponents";
import { withRouter } from "react-router-dom";

const PersonsPage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onItemSelect={id => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  );
};

export default withRouter(PersonsPage);
