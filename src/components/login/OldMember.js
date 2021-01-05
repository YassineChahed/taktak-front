import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import { UiContext } from '../../context/UiContext';

function OldMember(props) {
  const { loginForm, setLoginForm } = useContext(UiContext);

  function handleChange(e) {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(loginForm);
  }
    return (
        <div className="tabs-panel is-active" id="login">
                  <div className="form-inputs">
                    <div className="input-item">
                      <input type="text" placeholder="Email" name="email" value={loginForm.email} onChange={handleChange} />
                    </div>
                    <div className="input-item">
                      <input type="password" placeholder="Mot de passe" name="password" value={loginForm.password} onChange={handleChange} />
                      <span className="forgot-password">Mot de passe oublié?</span>
                    </div>
                  </div>
                  <div className="switchs">
                    <div className=" remembe-me">
                      {/* <input class="switch-input" id="remember-me-radio" type="checkbox" name="remember-me-radio" />
                  <label class="switch-paddle" for="remember-me-radio">
                    <span class="show-for-sr"></span>
                  </label> */}
                      <label htmlFor="toggle1" className="switch-one">
                        <input className="input" type="checkbox" id="toggle1" />
                        <div className="toggle-wrapper-one"><span className="selector-one" /></div>
                      </label>
                      <span>Se rappeler de moi</span>
                    </div>
                    <div className="remembe-me">
                      {/* <input class="switch-input" id="remember-me-radio-2" type="checkbox" name="remember-me-radio-2" />
                  <label class="switch-paddle" for="remember-me-radio-2">
                    <span class="show-for-sr"></span>
                  </label> */}
                      <label htmlFor="toggle2" className="switch-two">
                        <input className="input" type="checkbox" id="toggle2" />
                        <div className="toggle-wrapper-two"><span className="selector-two" /></div>
                      </label>
                      <span>Maintenir la session active</span>
                    </div>
                  </div>
                  <button className="login-submit">Connexion</button>
                  <div className="socials">
                    <button className="phone">
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
                    <button className="google">
                      <i className="icon-google" />Google
                    </button>
                    <button className="facebook">
                      <i className="icon-facebook" />Facebook
                    </button>
                  </div>
                </div>
               
    )
}

OldMember.propTypes = {

}

export default OldMember

