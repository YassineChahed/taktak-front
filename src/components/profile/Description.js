import React from "react";
import PropTypes from "prop-types";
import UserStats from "./descreptionUtils/UserStats";
import Brief from "./descreptionUtils/Brief";
import Personal from "./descreptionUtils/Personal";
import Followers from "./descreptionUtils/Followers";
import Rflollows from "./descreptionUtils/Rflollows";

function Description(props) {
  const { user } = props;
  const { followers, follows, rFollows, description, birthDate , city , languages,email, phone } = user;
  return (
    <div className="tabs-panel is-active" id="panel1">
      {/* user Stats */}
      <UserStats followers={followers} follows={follows} rFollows={rFollows} />
      {/*user brief paragraph  */}
      <Brief description={description} />
      {/* user personel info */}
     <Personal birthDate={birthDate} city={city} languages={languages} email={email} phone={phone} />
      {/* user follower */}
    <Followers followers={followers} follows={follows} rFollows={rFollows}  />
     <Rflollows rFollows={rFollows}/>
    </div>
  );
}

Description.propTypes = {};

export default Description;
