import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { UiContext } from "../../context/UiContext";
import { getNodeText } from "@testing-library/react";

function FirstSlide(props) {
  const { signUpPageNumber, setSignUpPageNumber } = useContext(UiContext);
  const { signUpForm, setSignUpForm } = useContext(UiContext);

  function goNext(){
    setSignUpPageNumber(2)
  }

  return (
    <ul className="orbit-container">
      <li className="orbit-slide one is-active">
        <div className="input-item">
          <input type="text" placeholder="Nom" name="firstName" value={signUpForm.firstName} onChange={props.handleChange} />
        </div>
        <div className="input-item">
          <input type="text" placeholder="Prenom" name="lastName" value={signUpForm.lastName} onChange={props.handleChange}/>
        </div>
        <div className="buttons-container">
          <button className="signup-button button-download">
            <div className="phone-switch">
              <i className="icon-phone" />
              <span className="download">Télécharger</span>
              <span className="app">Application Mobile</span>
            </div>
            <div className="android">
              <i className="icon-android" />
              <span>Android</span>
            </div>
            <div className="ios">
              <i className="fab fa-apple" />
              <span>ios</span>
            </div>
          </button>
       
            <button onClick={goNext}  className="signup-button button-next go-next">
              Suivant
            </button>
         
        </div>
      </li>
    </ul>
  );
}

FirstSlide.propTypes = {};

export default FirstSlide;
