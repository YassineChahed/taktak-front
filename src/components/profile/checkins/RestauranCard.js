import React from 'react'
import PropTypes from 'prop-types'
import Rating from '@material-ui/lab/Rating'

function RestauranCard(props) {
    return (
        <div className="restaurant-with-info">
        <div className="slide-media">
          <img src={props.restaurant.profileImage} />
        </div>
        <div className="slide-info">
          <div className="slide-info-header">
            <img src={props.restaurant.profileImage} />
            <div className="name">
              <span className="restaurant-name">Magic Kindle</span>
              <span className="restaurant-location">
                <i className="icon-marker" />
                Tunis, Cuisine
              </span>
            </div>
            <div style={{ marginLeft: "auto", marginTop: "-1rem" }}>
              <Rating
                name="read-only"
                value={props.restaurant.rate}
                readOnly
              />
            </div>
          </div>
          <div className="slide-info-body">
            <div className="time">
              <i className="icon-clock" />
              <span className="title">Horaires d’ouverture</span>
              {props.restaurant.isOpen?<span className="status">ouvert</span>:<></>}
              <span className="_time">10:00 - 00:00</span>
            </div>
            <div className="info">
              <i className="icon-info" />
              <span className="title">Infos utiles</span>
              <div className="_info">
                <span> À emporter Disponible</span>
                <span> Vin et bière</span>
                <span> Sièges intérieurs</span>
                <span>Wifi</span>
                <span>Projection sportive en direct</span>
                <span>Parking privé</span>
              </div>
            </div>
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
          <div className="slide-info-footer" />
        </div>
      </div>
      
    )
}

RestauranCard.propTypes = {

}

export default RestauranCard

