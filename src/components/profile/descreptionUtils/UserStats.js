import React from "react";
import PropTypes from "prop-types";


function UserStats(props) {
  return (
    <div className="user-stats">
      <span className="line" />
      <div className="user-stat">
        <div className="user-stat-top">
          <div>{props.follows.number}</div>
          <span>Amis suivis</span>
        </div>
        <div className="user-stat-bottom">
          <img src={props.follows.sample[0].profileImage} />
          <img src={props.follows.sample[1].profileImage} />
          <img src={props.follows.sample[2].profileImage} />
          <img src={props.follows.sample[3].profileImage} />
        </div>
      </div>
      <div className="user-stat">
        <div className="user-stat-top">
          <div>{props.followers.number}</div>
          <span>Profiles te suivent</span>
        </div>
        <div className="user-stat-bottom">
          <img src={props.followers.sample[0].profileImage} />
          <img src={props.followers.sample[1].profileImage} />
          <img src={props.followers.sample[2].profileImage} />
          <img src={props.followers.sample[3].profileImage} />
        </div>
      </div>
      <div className="user-stat">
        <div className="user-stat-top">
          <div>{props.rFollows.number}</div>
          <span>Restaurants suivis</span>
        </div>
        <div className="user-stat-bottom">
          <img src={props.rFollows.sample[0].profileImage} />
          <img src={props.rFollows.sample[1].profileImage} />
          <img src={props.rFollows.sample[2].profileImage} />
          <img src={props.rFollows.sample[3].profileImage} />
        </div>
      </div>
    </div>
  );
}

UserStats.propTypes = {};

export default UserStats;
