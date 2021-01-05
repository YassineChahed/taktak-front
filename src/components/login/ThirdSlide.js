import React, { useContext, useState } from "react";
import PropTypes from 'prop-types'
import { UiContext } from "../../context/UiContext";

function ThirdSlide(props) {
  const { signUpPageNumber, setSignUpPageNumber } = useContext(UiContext);
  const {signUpForm,setSignUpForm} = useContext(UiContext)

  function goNext(){
    setSignUpPageNumber(4)
  }
    return (
        <ul className="orbit-container">
             {/* Slide  */}
             <li className="orbit-slide">
                          <span className="helper">Veuillez introduire votre numéro mobile pour continuer.</span>
                          <div className="country-dropdown-wrapper">
                            <div className="options">
                              <img className="flag" src="assets/img/svg/tunisia-flag.svg" />
                              <div className="country-dropdown" type="text">
                                Tunisie (+216)
                              </div>
                            </div>
                            <i className="fal fa-bars bars" />
                            <div className="dropdown-filter" id="country-dropdown">
                              <form>
                                <div className="dropdown-search">
                                  <i className="fal fa-search" />
                                  <input type="text" placeholder="Cherchez votre pays" />
                                </div>
                                <div className="chosen-country">
                                  <img src="assets/img/svg/tunisia-flag.svg" />
                                  <span>Tunisie (+216)</span>
                                </div>
                                <div className="countries">
                                  <div className="country-with-lettre">
                                    <div>
                                      <img src="assets/img/svg/tunisia-flag.svg" />
                                      <span>Tunisie (+216)</span>
                                    </div>
                                    <div className="lettre">
                                      <span>A</span>
                                    </div>
                                  </div>
                                  <div className="country">
                                    <img src="assets/img/svg/tunisia-flag.svg" />
                                    <span>Tunisie (+216)</span>
                                  </div>
                                  <div className="country">
                                    <img src="assets/img/svg/tunisia-flag.svg" />
                                    <span>Tunisie (+216)</span>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div className="input-item country-code-wrapper">
                              <span className="country-code">(+216)</span>
                              <input type="text" placeholder="56 28 37 83" name="phone" value={signUpForm.phone} onChange={props.handleChange}/>
                            </div>
                          </div>
                          <div className="input-item code-verif">
                            <input type="text" placeholder="----" />
                            <span className="loading-line-placeholder" />
                            <span className="loading-line" />
                          </div>
                          <div className="resend-code">
                            <span>Rien reçu? <button>Renvoyez SMS</button></span>
                          </div>
                          <div className="buttons-container phone-number">
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
                            <button onClick={goNext} className="signup-button button-next normal-p">
                              Vérifiez mon numéro
                            </button>
                          </div>
                        </li>
                        {/* End Slide  */}
        </ul>
    )
}

ThirdSlide.propTypes = {

}

export default ThirdSlide

