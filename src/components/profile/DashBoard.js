import React from 'react'
import PropTypes from 'prop-types'

function DashBoard(props) {
    return (
        <div className="tabs-panel is-active" id="panel1">
        <div className="dashboard">
          <div className="dashboard-first">
            <div className="my-reservation">
              <div className="my-reservation-title">
                Mes réservations (0)
              </div>
              <div className="my-reservation-body">
                <img src="assets/img/svg/spagetti.svg" />
                <div className="my-reservation-body-info">
                  <p>
                    Vous n’avez pas pour le moment aucune réservation !
                  </p>
                  <button>Réservez maintenant</button>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="my-transactions">
              <div className="my-transactions-title">
                Mes transactions
              </div>
              <div className="my-transactions-body">
                <img src="assets/img/svg/coins.svg" />
                <div className="my-reservation-body-info">
                  <p>
                    Vous n’avez pas pour le moment aucune transaction !
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-second">
            <div className="my-interactions">
              <div className="my-interactions-title">
                <span>Vos interactions sur TakTak</span>
                <i className="fal fa-question-circle" />
              </div>
              <div className="highlights">
                <div className="highlight">
                  <div className="border">
                    {" "}
                    <span className="highlight-container">
                      <i className="icon-phone" />
                    </span>
                  </div>
                  <span>36 stories</span>
                </div>
                <div className="highlight">
                  <div className="border">
                    {" "}
                    <span className="highlight-container">
                      <i className="icon-phone" />
                    </span>
                  </div>
                  <span>4 articles</span>
                </div>
                <div className="highlight">
                  <div className="border">
                    {" "}
                    <span className="highlight-container">
                      <i className="icon-phone" />
                    </span>
                  </div>
                  <span>16 posts</span>
                </div>
                <div className="highlight">
                  <div className="border">
                    {" "}
                    <span className="highlight-container">
                      <i className="icon-phone" />
                    </span>
                  </div>
                  <span>28 restos</span>
                </div>
              </div>
            </div>
            <div className="my-stats">
              <div className="my-stats-title">
                <span>Visulisation Stats</span>
                <span>
                  30 Jours
                  <i className="fal fa-sort-down" aria-hidden="true" />
                </span>
              </div>
              <div className="my-stats-body">
                <div className="chart-container">
                  <img src="assets/img/svg/chart.svg" />
                  <span className="number-of-reservation">
                    <span>1456</span>
                    Réservations
                  </span>
                </div>
                <div className="chart-info">
                  <span className="one-info">
                    <span className="info-circle" />
                    <span className="info-label">Indicateur 1</span>
                    <span className="info-value">354 Réservations</span>
                  </span>
                  <span className="one-info">
                    <span className="info-circle" />
                    <span className="info-label">Indicateur 1</span>
                    <span className="info-value">354 Réservations</span>
                  </span>
                  <span className="one-info">
                    <span className="info-circle" />
                    <span className="info-label">Indicateur 1</span>
                    <span className="info-value">354 Réservations</span>
                  </span>
                  <span className="one-info">
                    <span className="info-circle" />
                    <span className="info-label">Indicateur 1</span>
                    <span className="info-value">354 Réservations</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="my-booking">
              <div className="my-booking-title">
                <span>Mes réservations (2)</span>
                <a href="booking-page.html">Réservez maintenant </a>
              </div>
              <div className="my-booking-body">
                <div className="my-booking-ele">
                  <a
                    className="my-booking-ele-top"
                    href="booking-process.html"
                  >
                    <div className="you-may-like-element-booking">
                      <div className="you-may-like-element-media-booking">
                        <img src="assets/img/1b2fca47f0a29674b998927c1d7741f3.png" />
                      </div>
                      <div className="you-may-like-element-info-booking">
                        <div className="info-header">
                          <img src="assets/img/icon-restaurant.png" />
                          <div className="name">
                            <span className="restaurant-name">
                              Magic Kindle
                            </span>
                            <span className="restaurant-location">
                              <i className="icon-marker" />
                              Tunis, Cuisine
                            </span>
                            <div className="raiting">
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span>
                      {" "}
                      En attente <i className="icon-time" />
                    </span>
                  </a>
                  <div className="divider" />
                  <a
                    className="my-booking-ele-bottom"
                    href="booking-process.html"
                  >
                    <div>
                      <span className="my-booking-label">
                        Date &amp; Heure
                      </span>
                      <span className="my-booking-value">
                        Lundi 12 Mars 2010 / 19:00 – 21:00
                      </span>
                    </div>
                    <div>
                      <span className="my-booking-label">
                        Nombre de personnes
                      </span>
                      <span className="my-booking-value">
                        <span className="number">5</span>
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
                        </div>
                        <span className="number-sur-taktak">
                          {" "}
                          Dont 3 son sur TakTak
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="my-booking-label">
                        Modalité de payement
                      </span>
                      <span className="my-booking-value"> Espèce</span>
                    </div>
                    <div>
                      <span className="my-booking-label">
                        Votre note spéciale
                      </span>
                      <span className="my-booking-value">
                        «&nbsp; Pas à l’entrée SVP &amp; diminuez volume
                        TV :)&nbsp;»
                      </span>
                    </div>
                  </a>
                </div>
                <div className="my-booking-ele">
                  <a
                    className="my-booking-ele-top"
                    href="booking-process.html"
                  >
                    <div className="you-may-like-element-booking">
                      <div className="you-may-like-element-media-booking">
                        <img src="assets/img/1b2fca47f0a29674b998927c1d7741f3.png" />
                      </div>
                      <div className="you-may-like-element-info-booking">
                        <div className="info-header">
                          <img src="assets/img/icon-restaurant.png" />
                          <div className="name">
                            <span className="restaurant-name">
                              Magic Kindle
                            </span>
                            <span className="restaurant-location">
                              <i className="icon-marker" />
                              Tunis, Cuisine
                            </span>
                            <div className="raiting">
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                              <i className="fal fa-star" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="Confirmed">
                      {" "}
                      Confirmée <i className="fal fa-calendar-check" />
                    </span>
                  </a>
                  <div className="divider" />
                  <a
                    className="my-booking-ele-bottom"
                    href="booking-process.html"
                  >
                    <div>
                      <span className="my-booking-label">
                        Date &amp; Heure
                      </span>
                      <span className="my-booking-value">
                        Lundi 12 Mars 2010 / 19:00 – 21:00
                      </span>
                    </div>
                    <div>
                      <span className="my-booking-label">
                        Nombre de personnes
                      </span>
                      <span className="my-booking-value">
                        <span className="number">5</span>
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
                        </div>
                        <span className="number-sur-taktak">
                          {" "}
                          Dont 3 son sur TakTak
                        </span>
                      </span>
                    </div>
                    <div>
                      <span className="my-booking-label">
                        Modalité de payement
                      </span>
                      <span className="my-booking-value"> Espèce</span>
                    </div>
                    <div>
                      <span className="my-booking-label">
                        Votre note spéciale
                      </span>
                      <span className="my-booking-value">
                        «&nbsp; Pas à l’entrée SVP &amp; diminuez volume
                        TV :)&nbsp;»
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="my-transactions-list">
              <div className="my-transactions-list-header">
                <div className="header-title">Mes transactions</div>
                <span>
                  Les plus récents
                  <i className="fal fa-sort-down" aria-hidden="true" />
                </span>
              </div>
              <div className="my-transactions-list-body">
                <div className="body-list-header">
                  <span>Date</span>
                  <span>Heure</span>
                  <span>Montat</span>
                </div>
                <div className="body-list-body">
                  <div className="my-transaction-item">
                    <div className="transaction-restaurant">
                      <img src="assets/img/icon-restaurant.png" />
                      <div>
                        <span>Belle Restaurant</span>
                        <span>
                          <i className="icon-marker" /> Tunis, Cuisine
                        </span>
                      </div>
                    </div>
                    <span className="transaction-item-value">
                      11/02/2010
                    </span>
                    <span className="transaction-item-value">
                      15h:34
                    </span>
                    <span className="transaction-item-value-price">
                      87.3 dt
                    </span>
                  </div>
                  <div className="my-transaction-item">
                    <div className="transaction-restaurant">
                      <img src="assets/img/icon-restaurant.png" />
                      <div>
                        <span>Belle Restaurant</span>
                        <span>
                          <i className="icon-marker" /> Tunis, Cuisine
                        </span>
                      </div>
                    </div>
                    <span className="transaction-item-value">
                      11/02/2010
                    </span>
                    <span className="transaction-item-value">
                      15h:34
                    </span>
                    <span className="transaction-item-value-price">
                      87.3 dt
                    </span>
                  </div>
                  <div className="my-transaction-item">
                    <div className="transaction-restaurant">
                      <img src="assets/img/icon-restaurant.png" />
                      <div>
                        <span>Belle Restaurant</span>
                        <span>
                          <i className="icon-marker" /> Tunis, Cuisine
                        </span>
                      </div>
                    </div>
                    <span className="transaction-item-value">
                      11/02/2010
                    </span>
                    <span className="transaction-item-value">
                      15h:34
                    </span>
                    <span className="transaction-item-value-price">
                      87.3 dt
                    </span>
                  </div>
                  <div className="my-transaction-item">
                    <div className="transaction-restaurant">
                      <img src="assets/img/icon-restaurant.png" />
                      <div>
                        <span>Belle Restaurant</span>
                        <span>
                          <i className="icon-marker" /> Tunis, Cuisine
                        </span>
                      </div>
                    </div>
                    <span className="transaction-item-value">
                      11/02/2010
                    </span>
                    <span className="transaction-item-value">
                      15h:34
                    </span>
                    <span className="transaction-item-value-price">
                      87.3 dt
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    )
}

DashBoard.propTypes = {

}

export default DashBoard

