import React from "react";
import PropTypes from "prop-types";

import Rating from "@material-ui/lab/Rating";

import Box from "@material-ui/core/Box";

function Rcards(props) {
  return (
    <div>
      <div className="you-may-like-element">
        <div className="you-may-like-element-media">
          <img src={props.restaurant.profileImage} />
        </div>
        <div className="you-may-like-element-info">
          <div className="info-header">
            <img src={props.restaurant.profileImage} />
            <div className="name">
              <span className="restaurant-name">
                {props.restaurant.userName}{" "}
              </span>
              <span className="restaurant-location">
                <i className="icon-marker" />
                {props.restaurant.location}
              </span>
            </div>
            <div style={{ marginLeft: "auto", marginTop: "-1rem" }}>
              <Rating
                name="read-only"
                value={props.restaurant.rating}
                readOnly
              />
            </div>
          </div>
          <div className="info-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices quam ac augue efficitur porttitor. Nunc gravida tortor
            vestibulum.
          </div>
        </div>
      </div>
    </div>
  );
}

Rcards.propTypes = {};

export default Rcards;
