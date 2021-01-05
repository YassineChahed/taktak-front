import React from "react";
import PropTypes from "prop-types";
import SuggestionItem from "./SuggestionItem";
import Slider from "infinite-react-carousel";

function Suggestions(props) {
  const users = [
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
    {
      name: "bouhmid bouhmid",
      profileImage: "https://picsum.photos/300/300",
      location: "Tunis",
    },
  ];
  const settings = {
    slidesPerRow: 4,
    slidesToShow: 1,
    centerPadding: 110,
   
  };
  
 
  const tabUsers = users.map((el)=>{
      return <SuggestionItem
      user={el}
    />
  })
  return (
    <div className="interesting-profiles">
    <div className="interesting-profiles-header">
      <h3 className="interesting-profiles-header-title">
        Profils intéressants à suivre
      </h3>
      <span className="interesting-profiles-header-show-more">
        Voir tout
      </span>
    </div>
      
    <div className="interesting-profiles-body">
        
      <div className="wrapper">
        <div className="carousel">
          {/* <SuggestionItem
            user={{
              name: "bouhmid bouhmid",
              profileImage: "https://picsum.photos/300/300",
              location: "Tunis",
            }}
          /> */}
          <div >
            <Slider {...settings}>
             
              {tabUsers}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

Suggestions.propTypes = {};

export default Suggestions;
