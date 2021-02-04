import React from "react";
import PropTypes from "prop-types";
import CheckinLocationCard from "./checkins/CheckinLocationCard";

function Checkins(props) {
  const checkins = [
    {
      location: "Hammemet",
      checkinsNumber: 4,
      restaurantsNumber: 23,
      locationImage: "https://picsum.photos/440",
    },
    {
      location: "Tunis",
      checkinsNumber: 7,
      restaurantsNumber: 23,
      locationImage: "https://picsum.photos/450",
    },
    {
      location: "Sousse",
      checkinsNumber: 2,
      restaurantsNumber: 23,
      locationImage: "https://picsum.photos/410",
    },
    {
      location: "Djerba",
      checkinsNumber: 7,
      restaurantsNumber: 23,
      locationImage: "https://picsum.photos/430",
    },
  ];
let tab=[]
tab = checkins.map(el=><CheckinLocationCard checkin={el}/>)
  return (
    <div className="tabs-panel is-active" id="panel1">
      <div className="check-in">
        <div className="check-in-first">
          <div className="check-in-header">
            <span className="checkin-label">
              Lieux <strong> 18</strong>
            </span>
            <span className="checkin-options">
              Les plus récents
              <i className="fal fa-sort-down" aria-hidden="true" />
            </span>
          </div>
          <div className="check-in-body">
            {tab}
          
          </div>
        </div>
      
      </div>
    </div>
  );
}

Checkins.propTypes = {};

export default Checkins;
