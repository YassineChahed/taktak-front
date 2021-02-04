import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function CheckinMapHeader(props) {
  return (
    <div className="check-in-map">
      <div className="check-in-map-header">
        <span className="map-label">Lieux {props.location.placesNumber}</span>
        <span className="map-options">
          Les plus récents
          <i className="fal fa-sort-down" aria-hidden="true" />
        </span>
      </div>
      <div className="check-in-map-body">
        <img src={props.location.locationImage} />
        <NavLink exact to="/profile/checkins">
      
          <div className="retour">
            <i className="fal fa-long-arrow-left" />
            <span>Retour</span>
          </div>
        </NavLink>

        <div className="map-info">
          <span>
            <i className="icon-marker" />
            {props.location.name}
          </span>
          <span>
            <i className="fal fa-map-marker-smile" />
            {props.location.checkinsNumber} chcek'ins
          </span>
          <span>{props.location.restaurantsNumber} restaurants</span>
        </div>
      </div>
    </div>
  );
}

CheckinMapHeader.propTypes = {};

export default CheckinMapHeader;
