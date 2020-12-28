import React from 'react'
import PropTypes from 'prop-types'

function SideBar(props) {
    return (
        <div className="feeds-page-sidemenu sidemenu" id="sidemenu">
        <div className="sidemenu-header">
          <div className="sidemenu-logo">
            <a href="login.html"> <img src="assets/img/svg/logo-gradient.svg" /></a>
          </div>
          <div className="input-wrapper">
            <img className="woman-restaurant" src="assets/img/woman-restaurant.png" />
            <i className="fal fa-search" />
            <input type="text" placeholder="Rechercher un Resto" className="search-rest" />
            {/* <i class="icon-search"></i> */}
            <i className="fal fa-eraser eraser" />
          </div>
        </div>
        <div className="sidemenu-body">
          <ul className="body-navigation">
            <li className="active with-menu">
              <a href="feeds">Journal</a>
              <button className="navigation-menu" type="button" data-toggle="navigation-menu">
                <i className="icon-dots-horizontal" />
              </button>
              <div className="dropdown-pane" id="navigation-menu" data-dropdown data-auto-focus="true">
                <ul className="navigation-menu-items">
                  <li className="first">
                    Journal
                    <button id="close-navigation-menu-items">
                      <i className="icon-dots-horizontal" />
                    </button>
                  </li>
                  <li> <strong> Afficher tout</strong></li>
                  <li>Les plus récents</li>
                  <li>Posts des restaurants</li>
                  <li>Posts des users</li>
                  <li>Reviews</li>
                </ul>
              </div>
            </li>
            <li className="autour-de-moi-navigation"><a href="autour-de-moi.html">Autour de moi</a>
              <button className="navigation-autour-de-moi" type="button" data-toggle="navigation-autour-de-moi">
                <i className="fal fa-sliders-h setting" />
              </button>
              <div className="show" id="navigation-autour-de-moi" data-dropdown data-auto-focus="true">
                <ul className="navigation-autour-de-moi-items">
                  <li className="first">
                    Autour de moi
                    <button id="close-navigation-autour-de-moi-items">
                      <i className="fal fa-sliders-h " />
                    </button>
                  </li>
                  <li> <strong> Activer tout</strong>
                    <label className="switch ">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label>
                  </li>
                  <li>Les plus récents
                    <label className="switch ">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label>
                  </li>
                  <li>Posts des restaurants
                    <label className="switch ">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label>
                  </li>
                  <li>Posts des users<label className="switch ">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label></li>
                  <li>Reviews
                    <label className="switch ">
                      <input type="checkbox" />
                      <span className="slider round" />
                    </label>
                  </li>
                </ul>
              </div>
            </li>
            <li><a href="proposer-moi.html">Poser moi un restaurant</a></li>
            <li><a href="my-besties.html">Besties</a></li>
          </ul>
          <ul className="useful-links">
            <li><a href="blog.html">Blog</a></li>
            <li><a href="#">Promos &amp; Offres</a></li>
            <li><a href="#">A propos de nous</a></li>
          </ul>
        </div>
        <div className="sidemenu-footer">
          <button className="restaurant-owner">
            <i className="icon-restaurant"> </i>
            <span className="one">Propriétaire de Resto ?</span>
            <span className="add">Ajouter votre Restaurant</span>
            <i className="fal fa-utensils-alt utensils " />
          </button>
          <span className="rights">All right reserved 2020 . TAKTAK</span>
        </div>
      </div>
     
    )
}

SideBar.propTypes = {

}

export default SideBar

