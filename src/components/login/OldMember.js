import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { UiContext } from "../../context/UiContext";

import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";


function OldMember(props) {
  const { loginForm, setLoginForm } = useContext(UiContext);

  function handleChange(e) {
    setLoginForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(loginForm);
  }

  const handleCheck = (event) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 45,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(18px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: theme.palette.common.white,
          opacity: 1,
          border: "none",
        },
      },
      "&$focusVisible $thumb": {
        color: "#ff6900",
        border: "6px solid #fff",
      },
    },
    thumb: {
      width: 24,
      height: 24,
      "&$checked": {
        color: theme.palette.common.white,
      },
      color: "#ff6900",
    },
    track: {
      borderRadius: 26 / 2,
      border: theme.palette.common.white,
      backgroundColor: theme.palette.common.white,
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"]),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

  return (
    <div className="tabs-panel is-active" id="login">
      <div className="form-inputs">
        <div className="input-item">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={loginForm.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-item">
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
          />
          <span className="forgot-password">Mot de passe oublié?</span>
        </div>
      </div>
      <div className="switchs">
        <div className=" remembe-me">
          <input
            class="switch-input"
            id="remember-me-radio"
            type="checkbox"
            name="remember-me-radio"
          />

          <FormControlLabel
            control={
              <IOSSwitch
                checked={loginForm.rememberMe}
                onChange={handleCheck}
                name="rememberMe"
              />
            }
          />
          <span>Se rappeler de moi</span>
        </div>
        <div className="remembe-me">
          {/* <input class="switch-input" id="remember-me-radio-2" type="checkbox" name="remember-me-radio-2" />
                  <label class="switch-paddle" for="remember-me-radio-2">
                    <span class="show-for-sr"></span>
                  </label> */}
          <FormControlLabel
            control={
              <IOSSwitch
                checked={loginForm.keepMe}
                onChange={handleCheck}
                name="keepMe"
              />
            }
          />
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
          <i className="icon-google" />
          Google
        </button>
        <button className="facebook">
          <i className="icon-facebook" />
          Facebook
        </button>
      </div>
    </div>
  );
}

OldMember.propTypes = {};

export default OldMember;
