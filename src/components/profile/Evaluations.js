import React from 'react'
import PropTypes from 'prop-types'

function Evaluations(props) {
    return (
        <div className="tabs-panel is-active" id="panel4">
        <div className="evaluation">
          <div className="evaluation-header">
            <span className="evaluation-label">
              Avis <strong>14555</strong>{" "}
            </span>
            <span className="evaluation-options">
              Les plus récents
              <i className="fal fa-sort-down" aria-hidden="true" />
            </span>
          </div>
        </div>
        <div className="card post-card">
          <div className="post-card-header">
            <div className="post-card-photo more" />
          </div>
          <div className="post-card-body">
            <div className="user-who-post-wrapper">
              <div className="user-who-post">
                <div className="user-who-post-info">
                  <div className="user-who-post-info-avatar">
                    <img src="assets/img/avatar.png" />
                  </div>
                  <div className="user-who-post-info-info">
                    <span className="user-username">Alex</span>
                    <div className="user-about">
                      <i className="fal fa-map-marker-alt" />
                      <span> Mado Café &amp; Resto</span>
                    </div>
                  </div>
                </div>
                <div className="user-who-post-options">
                  <div className="raiting">
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                  </div>
                  <div className="header-note">
                    <span>
                      3.5 <strong>/5</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-card-body-description-user">
                <div className="description-note">
                  <span className="note">3/5</span>
                  <span className="date">12 janvier 2020 à 18:30</span>
                </div>
                <span className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nam dictum sit amet metus ut faucibus. Ut tempus
                  lobortis elit, nec consequat mauris tincidunt vitae.
                  Cras sodales, mi non gravida venenatis, ante tortor
                  aliquam ante, in ornare magna tortor dapibus mauris.
                  Vivamus ut lacus commodo lorem aliquam iaculis. Fusce
                  sit amet pretium enim.
                </span>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="post-card-footer">
            <div className="post-card-social-info">
              <div className="post-card-likes">
                <i className="icon-heart" />
                <span className="likes-number">33</span>
              </div>
              <div className="post-card-comments">
                <i className="icon-comment" />
                <span className="comments-number">32</span>
                <span className="comments-show-more">
                  Masquer commentaires
                </span>
              </div>
              <div className="post-card-comment-button">
                <i className="fal fa-flag"> </i>
              </div>
            </div>
            <div className="post-card-comment">
              <div className="post-card-comment-avatar">
                <img src="assets/img/avatar.png" />
                <i className="fal fa-sort-down" aria-hidden="true" />
              </div>
              <div className="post-card-comment-input">
                <input
                  placeholder="Commenter ce post"
                  className="post-card-comment-input-field"
                  type="text"
                />
                <div className="comment-options">
                  <i className="icon-camera" />
                  <i className="icon-smile" />
                  <i className="icon-mic" />
                </div>
              </div>
            </div>
            <div className="post-card-comments-list">
              <div className="who-comment">
                <div className="who-comment-info">
                  <img src="assets/img/avatar.png" />
                  <span className="who-comment-info-username">
                    Alex{" "}
                  </span>
                </div>
                <div className="who-comment-info-description">
                  Proin sit amet ipsum eget ante venenatis posuere.
                  Maecenas diam risus, accumsan at facilisis sit amet,
                  eleifend et arcu. Nam viverra pharetra condimentum.
                  Vestibulum dui metus, fringilla sed facilisis ut,
                  congue ut tortor.
                </div>
              </div>
              <div className="who-comment">
                <div className="who-comment-info">
                  <img src="assets/img/avatar.png" />
                  <span className="who-comment-info-username">
                    Scholes
                  </span>
                </div>
                <div className="who-comment-info-description">
                  Proin sit amet ipsum eget ante venenatis posuere.
                  Maecenas diam risus, accumsan at facilisis sit amet,
                  eleifend et arcu. Nam viverra pharetra condimentum.
                  Vestibulum dui metus, fringilla sed facilisis ut,
                  congue ut tortor.
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="card post-card">
          <div className="post-card-header">
            <div className="post-card-photo more" />
          </div>
          <div className="post-card-body">
            <div className="user-who-post-wrapper">
              <div className="user-who-post">
                <div className="user-who-post-info">
                  <div className="user-who-post-info-avatar">
                    <img src="assets/img/avatar.png" />
                  </div>
                  <div className="user-who-post-info-info">
                    <span className="user-username">Alex</span>
                    <div className="user-about">
                      <i className="fal fa-map-marker-alt" />
                      <span> Mado Café &amp; Resto</span>
                    </div>
                  </div>
                </div>
                <div className="user-who-post-options">
                  <div className="raiting">
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                    <i className="fal fa-star" />
                  </div>
                  <div className="header-note">
                    <span>
                      3.5 <strong>/5</strong>
                    </span>
                  </div>
                </div>
              </div>
              <div className="post-card-body-description-user">
                <div className="description-note">
                  <span className="note">3/5</span>
                  <span className="date">12 janvier 2020 à 18:30</span>
                </div>
                <span className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nam dictum sit amet metus ut faucibus. Ut tempus
                  lobortis elit, nec consequat mauris tincidunt vitae.
                  Cras sodales, mi non gravida venenatis, ante tortor
                  aliquam ante, in ornare magna tortor dapibus mauris.
                  Vivamus ut lacus commodo lorem aliquam iaculis. Fusce
                  sit amet pretium enim.
                </span>
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="post-card-footer">
            <div className="post-card-social-info">
              <div className="post-card-likes">
                <i className="icon-heart" />
                <span className="likes-number">33</span>
              </div>
              <div className="post-card-comments">
                <i className="icon-comment" />
                <span className="comments-number">32</span>
                <span className="comments-show-more">
                  Masquer commentaires
                </span>
              </div>
              <div className="post-card-comment-button">
                <i className="fa fa-flag"> </i>
              </div>
            </div>
            <div className="post-card-comment">
              <div className="post-card-comment-avatar">
                <img src="assets/img/avatar.png" />
                <i className="fal fa-sort-down" aria-hidden="true" />
              </div>
              <div className="post-card-comment-input">
                <input
                  placeholder="Commenter ce post"
                  className="post-card-comment-input-field"
                  type="text"
                />
                <div className="comment-options">
                  <i className="icon-camera" />
                  <i className="icon-smile" />
                  <i className="icon-mic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}

Evaluations.propTypes = {

}

export default Evaluations

