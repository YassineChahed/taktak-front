import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function CheckinLocationCard(props) {
    return (
        <NavLink
        className="tabs-title tabs-Description"
        activeClassName="tabs-title tabs-Description is-active"
        exact
        to="/profile/checkins/location"
      >
        <div className="check-in-place">
        <div className="place-media">
          <img src={props.checkin.locationImage} />
          <div className="check-in-place-hover">
            <i className="fal fa-map-marker-smile"></i>
            <span>{props.checkin.checkinsNumber} chcek'ins</span>
          </div>
        </div>
        <div className="place-info">
          <span>
            <i className="icon-marker" /> {props.checkin.location}
          </span>
          <span className="place-restaurants">
            {props.checkin.restaurantsNumber} restaurants
          </span>
        </div>
      </div>
      </NavLink>
      
    )
}

CheckinLocationCard.propTypes = {

}

export default CheckinLocationCard

