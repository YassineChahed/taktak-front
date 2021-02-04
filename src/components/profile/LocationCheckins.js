import React from "react";
import PropTypes from "prop-types";
import CheckinMapHeader from "./checkins/CheckinMapHeader";
import RestauranCard from "./checkins/RestauranCard";

function LocationCheckins(props) {
  const location = {
    name: "Hammemet",
    checkinsNumber: 4,
    restaurantsNumber: 23,
    locationImage: "https://picsum.photos/440",
    placesNumber: 18,
    coordonees: "",
    restaurants: [
      {
        name: "restaurant1",
        profileImage:"https://picsum.photos/500/400",
        Location: "Tunis",
        rate: 4,
        horaire: "",
        isOpen: true,
        infos: [
          "À emporter Disponible",
          "Vin et bière",
          "Sièges intérieurs",
          "Wifi",
          "Projection sportive en direct",
          "Parking privé",
        ],
        friendsBeenThereNumber: 34,
        friendsBeenThere: [
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
        ],
      },
      {
        name: "restaurant1",
        profileImage:"https://picsum.photos/400/400",
        Location: "Tunis",
        rate: 3,
        horaire: "",
        isOpen: false,
        infos: [
          "À emporter Disponible",
          "Vin et bière",
          "Sièges intérieurs",
          "Wifi",
          "Projection sportive en direct",
          "Parking privé",
        ],
        friendsBeenThereNumber: 34,
        friendsBeenThere: [
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
          { name: "Ali",profileImage:"https://picsum.photos/200/300" },
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
          { name: "Ali", profileImage:"https://picsum.photos/200/300" },
        ],
      },
    ],
  };
  let tab = location.restaurants.map((el) => <RestauranCard restaurant={el} />);
  return (
    <div className="check-in">
      <div className="check-in-second">
        <CheckinMapHeader location={location} />
        {tab}

        {/* <div className="soft-restaurants">
          <div className="soft-restaurant">
            <div className="soft-restaurant-header">
              <img src="assets/img/image2.jpg" />
            </div>
            <div className="soft-restaurant-body">
              <div className="soft-restaurant-body-header">
                <img src="assets/img/icon-restaurant.png" />
                <div className="name">
                  <span className="restaurant-name">Magic Kindle</span>
                  <span className="restaurant-location">
                    <i className="icon-marker" />
                    Tunis, Cuisine
                  </span>
                </div>
                <div className="raiting">
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                </div>
              </div>
              <div className="soft-restaurant-body-footer">
                <div className="people-was-here">
                  <div className="peoples">
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                  </div>
                  <span>
                    <strong>Ahmed</strong> et 12 autres étaient là !
                  </span>
                </div>
              </div>
              <div className="soft-restaurant-body-invisible">
                <div className="promo">
                  <span className="promo-name">PROMO</span>
                  <span className="promo-value">-40%</span>
                </div>
                <button>
                  <i className="icon-restaurant" />
                  Suivre
                </button>
              </div>
            </div>
          </div>
          <div className="soft-restaurant">
            <div className="soft-restaurant-header">
              <img src="assets/img/image2.jpg" />
            </div>
            <div className="soft-restaurant-body">
              <div className="soft-restaurant-body-header">
                <img src="assets/img/icon-restaurant.png" />
                <div className="name">
                  <span className="restaurant-name">Magic Kindle</span>
                  <span className="restaurant-location">
                    <i className="icon-marker" />
                    Tunis, Cuisine
                  </span>
                </div>
                <div className="raiting">
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                </div>
              </div>
              <div className="soft-restaurant-body-footer">
                <div className="people-was-here">
                  <div className="peoples">
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                  </div>
                  <span>
                    <strong>Ahmed</strong> et 12 autres étaient là !
                  </span>
                </div>
              </div>
              <div className="soft-restaurant-body-invisible">
                <div className="promo">
                  <span className="promo-name">PROMO</span>
                  <span className="promo-value">-40%</span>
                </div>
                <button>
                  <i className="icon-restaurant" />
                  Suivre
                </button>
              </div>
            </div>
          </div>
          <div className="soft-restaurant">
            <div className="soft-restaurant-header">
              <img src="assets/img/image2.jpg" />
            </div>
            <div className="soft-restaurant-body">
              <div className="soft-restaurant-body-header">
                <img src="assets/img/icon-restaurant.png" />
                <div className="name">
                  <span className="restaurant-name">Magic Kindle</span>
                  <span className="restaurant-location">
                    <i className="icon-marker" />
                    Tunis, Cuisine
                  </span>
                </div>
                <div className="raiting">
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                </div>
              </div>
              <div className="soft-restaurant-body-footer">
                <div className="people-was-here">
                  <div className="peoples">
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                  </div>
                  <span>
                    <strong>Ahmed</strong> et 12 autres étaient là !
                  </span>
                </div>
              </div>
              <div className="soft-restaurant-body-invisible">
                <div className="promo">
                  <span className="promo-name">PROMO</span>
                  <span className="promo-value">-40%</span>
                </div>
                <button>
                  <i className="icon-restaurant" />
                  Suivre
                </button>
              </div>
            </div>
          </div>
          <div className="soft-restaurant">
            <div className="soft-restaurant-header">
              <img src="assets/img/image2.jpg" />
            </div>
            <div className="soft-restaurant-body">
              <div className="soft-restaurant-body-header">
                <img src="assets/img/icon-restaurant.png" />
                <div className="name">
                  <span className="restaurant-name">Magic Kindle</span>
                  <span className="restaurant-location">
                    <i className="icon-marker" />
                    Tunis, Cuisine
                  </span>
                </div>
                <div className="raiting">
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                  <i className="fal fa-star" />
                </div>
              </div>
              <div className="soft-restaurant-body-footer">
                <div className="people-was-here">
                  <div className="peoples">
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                    <div className="people">
                      <img src="assets/img/avatar.png" />
                    </div>
                  </div>
                  <span>
                    <strong>Ahmed</strong> et 12 autres étaient là !
                  </span>
                </div>
              </div>
              <div className="soft-restaurant-body-invisible">
                <div className="promo">
                  <span className="promo-name">PROMO</span>
                  <span className="promo-value">-40%</span>
                </div>
                <button>
                  <i className="icon-restaurant" />
                  Suivre
                </button>
              </div>
            </div>
          </div>
        </div>
       */}
      </div>
    </div>
  );
}

LocationCheckins.propTypes = {};

export default LocationCheckins;
