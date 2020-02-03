import React, { Component } from "react";
import Preloader from "../Preloader/Preloader";
import SwapiAPI from "../../services/swapi_api";
import "./PersonDetails.css";

const PersonView = ({ person }) => {
  const {
    id,
    name,
    gender,
    birthYear,
    eyeColor,
    height,
    mass,
    skinColor,
    hairColor
  } = person;
  return (
    <div className="person-wrapper">
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="avatar"
      />
      <div className="card-body">
        <h4>R2-D2</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender:</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year:</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color:</span>
            <span>{eyeColor}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Height:</span>
            <span>{height}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Mass:</span>
            <span>{mass}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Hair Color:</span>
            <span>{hairColor}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Skin Color:</span>
            <span>{skinColor}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default class PersonDetails extends Component {
  swapiApi = new SwapiAPI();
  state = {
    person: null,
    loading: false
  };
  componentDidMount() {
    this.updatePerson();
  }
  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }
  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) return;
    this.setState({ loading: true, person: null });
    this.swapiApi.getPerson(personId).then(person => {
      this.setState({ person, loading: false });
    });
  };
  render() {
    const { person, loading } = this.state;
    const preloader = loading ? <Preloader /> : null;
    const personView = person ? <PersonView person={person} /> : null;
    const hasData = !(loading || person);
    const msg = hasData ? <span>Please select item from the list</span> : null;
    return (
      <div className="person-details card">
        {preloader}
        {msg}
        {personView}
      </div>
    );
  }
}
