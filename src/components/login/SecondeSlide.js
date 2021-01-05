import React, { useContext, useState } from "react";
import PropTypes from 'prop-types'
import { UiContext } from '../../context/UiContext';

function SecondeSlide(props) {
  const { signUpPageNumber, setSignUpPageNumber } = useContext(UiContext);
  const {signUpForm,setSignUpForm} = useContext(UiContext)

  function goNext(){
    setSignUpPageNumber(3)
  }
    return (
        <ul className="orbit-container">
          
             <li className="orbit-slide ">
                          <div className="input-item">
                            <input type="text" placeholder="Email" name="email" value={signUpForm.email} onChange={props.handleChange} />
                          </div>
                          <div className="input-item">
                            <input type="password" placeholder="Mot de passe" name="password" value={signUpForm.password} onChange={props.handleChange} />
                          </div>
                          <div className="input-item">
                            <input type="password" placeholder="Vérifier mot de passe" name="verifiedPassword" value={signUpForm.verifiedPassword} onChange={props.handleChange} />
                          </div>
                          <div className="buttons-container2">
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
                            <button onClick={goNext} className="signup-button button-next go-next">
                              Suivant
                            </button>
                          </div>
                        </li>
                        
        </ul>
    )
}

SecondeSlide.propTypes = {

}

export default SecondeSlide

