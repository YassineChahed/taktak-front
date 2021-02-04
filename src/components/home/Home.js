import React, { useContext } from "react";
import CreatePost from "../post/CreatePost";
import PostStandard from "../post/PostStandard";
import Stories from "../stories/Stories";
import PostModal from "../post/PostModal";
import { UiContext } from "../../context/UiContext";
import Comment from "../post/Comment";
import Suggestions from "../suggestions/Suggestions";
//  import Flickity from 'react-flickity-component'
// const Flickity = require('flickity');

function Home() {
  const { openModalPost, setOpenModalPost } = useContext(UiContext);
  const { contentInPostModal, setContentInPostModal } = useContext(UiContext);
  const { indexOfClickedElement, setIndexOfClickedElement } = useContext(
    UiContext
  );
  const { handleClosePostModal } = useContext(UiContext);
  const posts = [
    {
      postId: 1,
      content: [
        "https://picsum.photos/400/401",
        "https://picsum.photos/400/402",
        "https://picsum.photos/400/403",
      ],
      handler: {
        name: "Francesco Boti",
        profileImage: "assets/img/avatar.png",
      },
      likesNumber: "323",
      commentsNumber: "23",
      location: " 9ahwet essou9",
      description: "this is a description ........",
      comments: [
        {
          commentHandler: {
            firstName: "so7leb",
            profileImage: "assets/img/avatar.png",
          },
          content: "commentaire so7leb",
        },
        {
          commentHandler: {
            firstName: "ma9arouna",
            profileImage: "assets/img/avatar.png",
          },
          content: "ma9arouna commentaire",
        },
        {
          commentHandler: {
            firstName: "mar9A",
            profileImage: "assets/img/avatar.png",
          },
          content: "commentaire mar9a",
        },
      ],
    },
    {
      postId: 2,
      content: [
        "assets/img/image1.png",
        "assets/img/image1.png",
        "assets/img/image1.png",
        "assets/img/image1.png",
        "assets/img/image1.png",
        "assets/img/image1.png",
        "assets/img/image1.png",
        "assets/img/image1.png",
      ],
      handler: {
        name: "Amir Bouker",
        profileImage: "assets/img/avatar.png",
      },
      likesNumber: "12",
      commentsNumber: "111",
      location: " 9ahwet JS",
      description: "this is a description ........",
      comments: [
        {
          commentHandler: {
            firstName: "so7leb",
            profileImage: "assets/img/avatar.png",
          },
          content: "commentaire so7leb",
        },
        {
          commentHandler: {
            firstName: "ma9arouna",
            profileImage: "assets/img/avatar.png",
          },
          content: "ma9arouna commentaire",
        },
        {
          commentHandler: {
            firstName: "mar9A",
            profileImage: "assets/img/avatar.png",
          },
          content: "commentaire mar9a",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="feeds-page" id="feeds-page">
        <div className="feeds-page-content container">
          <div className="feeds-page-content-feed">
            <div className="feed-main">
              <CreatePost />
          
              <PostModal
                data={contentInPostModal}
                index={indexOfClickedElement}
                open={openModalPost}
                handleClose={handleClosePostModal}
              />
              <PostStandard
                post={posts[0]}
                user={{
                  name: "moula el bach",
                  profileImage: "assets/img/avatar.png",
                }}
              />
              <PostStandard
                post={posts[1]}
                user={{
                  name: "moula el bach",
                  profileImage: "assets/img/avatar.png",
                }}
              />
                  <Suggestions/>
              <div className="card post-card">
                <div className="post-card-header">
                  <div className="post-card-photo" />
                  <img src="assets/img/image1.png" />
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
                            <i
                              className="fal fa-map-marker-alt"
                              aria-hidden="true"
                            />
                            <span> Mado Café &amp; Resto</span>
                          </div>
                        </div>
                      </div>
                      <div className="user-who-post-options">
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                          <span>Suivre</span>
                        </div>
                        <div className="more-options">
                          <i className="icon-dots-horizontal" />
                        </div>
                      </div>
                    </div>
                    <div className="post-card-body-description">
                      Proin sit amet ipsum eget ante venenatis posuere. Maecenas
                      diam risus, accumsan at facilisis sit amet, eleifend et
                      arcu. Nam viverra pharetra condimentum. Vestibulum dui
                      metus, fringilla sed facilisis ut, congue ut tortor.
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
                        Afficher commentaires
                      </span>
                    </div>
                    <div className="post-card-comment-button">
                      <i className="icon-send"> </i>
                    </div>
                  </div>
                  <div className="post-card-comment">
                    <div className="post-card-comment-avatar">
                      <img src="assets/img/avatar.png" />
                      <i className="fal fa-sort-down" />
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

              <div className="card post-card">
                <div className="post-card-header">
                  <div className="post-card-photo more" />
                  <div className="post-photos">
                    <div className="post-photo-container photo-one">
                      <img src="assets/img/image1.png" />
                    </div>
                    <div className="post-photo-container">
                      <img src="assets/img/image1.png" />
                    </div>
                    <div className="post-photo-container">
                      <img src="assets/img/image1.png" />
                      <div className="more-photos last-photo">
                        <span>+ 3</span>
                      </div>
                    </div>
                  </div>
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
                            <i
                              className="fal fa-map-marker-alt"
                              aria-hidden="true"
                            />
                            <span> Mado Café &amp; Resto</span>
                          </div>
                        </div>
                      </div>
                      <div className="user-who-post-options">
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                          <span>Suivre</span>
                        </div>
                        <div className="more-options">
                          <i className="icon-dots-horizontal" />
                        </div>
                      </div>
                    </div>
                    <div className="post-card-body-description">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.🤩🤘❤️
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
                        Afficher commentaires
                      </span>
                    </div>
                    <div className="post-card-comment-button">
                      <i className="icon-send"> </i>
                    </div>
                  </div>
                  <div className="post-card-comment">
                    <div className="post-card-comment-avatar">
                      <img src="assets/img/avatar.png" />
                      <i className="fal fa-sort-down" />
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
                    <Comment
                      comment={{
                        commentHandler: {
                          firstName: "so7leb",
                          profileImage: "assets/img/avatar.png",
                        },
                        content: "commentaire ghoul",
                      }}
                    />
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
                        Vestibulum dui metus, fringilla sed facilisis ut, congue
                        ut tortor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card restaurant-post-card">
                <div className="restaurant-my-besty-button">
                  <button>
                    <span className="button-my-besty">My Besty</span>
                    <span className="button-enlever">Enlever</span>
                    <i className="fal fa-star" />
                  </button>
                </div>
                <div className="restaurant-post-card-header">
                  <div className="restaurant-post-card-photo">
                    <img src="assets/img/image2.jpg" alt="restaurant-post " />
                  </div>
                </div>
                <div className="restaurant-post-card-body">
                  <div className="restaurant-who-post-wrapper">
                    <div className="restaurant-who-post">
                      <div className="restaurant-who-post-info">
                        <div className="restaurant-who-post-info-avatar">
                          <img src="assets/img/svg/dd40a46ad2da8099a80e16ff6a71df6e.png" />
                        </div>
                        <div className="restaurant-who-post-info-info">
                          <span className="restaurant-username">
                            Moh Yamin Resto
                          </span>
                          <div className="restaurant-about">
                            <i className="icon-marker" />
                            <span>Tunis, Cuisine Chinoise</span>
                          </div>
                        </div>
                      </div>
                      <div className="restaurant-who-post-options">
                        <div className="cup-button">
                          <i className="fal fa-wine-glass-alt" />
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                          <span>Suivre</span>
                        </div>
                        <div className="more-options">
                          <i className="icon-dots-horizontal" />
                        </div>
                      </div>
                    </div>
                    <div className="restaurant-post-card-body-description">
                      Proin sit amet ipsum eget ante venenatis posuere. Maecenas
                      diam risus, accumsan at facilisis sit amet, eleifend et
                      arcu. Nam viverra pharetra condimentum. Vestibulum dui
                      metus, fringilla sed facilisis ut, congue ut tortor.
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="restaurant-post-card-footer">
                  <div className="restaurant-post-card-social-info">
                    <div className="restaurant-post-card-likes">
                      <i className="icon-heart" />
                      <span className="likes-number">33</span>
                    </div>
                    <div className="restaurant-post-card-comments">
                      <i className="icon-comment" />
                      <span className="comments-number">21</span>
                      <span className="comments-show-more">
                        Afficher commentaires
                      </span>
                    </div>
                    <div className="restaurant-post-card-comment-button">
                      <i className="icon-send" />
                    </div>
                  </div>
                  <div className="restaurant-post-card-comment">
                    <div className="restaurant-post-card-comment-avatar">
                      <img src="assets/img/avatar.png" />
                      <i className="fal fa-sort-down" aria-hidden="true" />
                    </div>
                    <div className="restaurant-post-card-comment-input">
                      <input
                        placeholder="Commenter ce restaurant-post"
                        className="restaurant-post-card-comment-input-field"
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
              <div className="restaurant-book">
                <div className="restaurant-book-header">
                  <div className="description-left">
                    {/* <i class="icon-chair"></i> */}
                    <a className="title" href="booking-page.html">
                      Réservez un restaurant
                    </a>
                    <div className="description-footer">
                      Proin sit amet ipsum eget ante venenatis posuere. Maecenas
                      diam risus, accumsan at facilisis sit amet, eleifend et
                      arcu.
                    </div>
                  </div>
                  <div>
                    <i className="fal fa-chevron-right" />
                  </div>
                </div>
                <div className="restaurant-book-footer">
                  <div className="footer-left">
                    <span className="highlighted">Restos</span>
                    <span>
                      Les plus
                      <br />
                      demandés
                    </span>
                  </div>
                  <div className="footer-right">
                    <img src="assets/img/3f08a2ba008fd3dd0d8090b4d7ab82d8.png" />
                    <img src="assets/img/earth-2.png" />
                    <img src="assets/img/fossa.png" />
                    <img src="assets/img/fox-hub-2.png" />
                    <img src="assets/img/asgardia-2.png" />
                    <img src="assets/img/muzica-2.png" />
                  </div>
                </div>
              </div>
              <div className="mobile-app-ad">
                <i className="icon-dots-horizontal" />
                <img
                  className="bg"
                  src="assets/img/app-mobile.png"
                  alt="mobile add app"
                />
                <div className="mobile-app-ad-header">
                  <img src="assets/img/svg/logo-gradient.svg" />
                  <span>Application mobile</span>
                </div>
                <div className="mobile-app-ad-body">
                  <p>
                    Voir les menus et les photos des restaurants à proximité et
                    partager vos beaux endroits préférés avec la communauté Tak
                    Tak.
                  </p>
                  <p>
                    Nous vous enverrons un lien, ouvrez-le sur votre téléphone
                    pour télécharger l’application
                  </p>
                </div>
                <div className="mobile-app-ad-footer">
                  <div className="send">
                    <div className="send-header">
                      <button className="selected">SMS</button>
                      <button className>Email</button>
                    </div>
                    <div className="send-body">
                      <input type="text" placeholder="+216 28 ** **" />
                      <div className="send-options">
                        <i className="fal fa-pen" />
                        <span>Envoyer</span>
                      </div>
                    </div>
                  </div>
                  <div className="downloads">
                    <img src="assets/img/google-play.png" alt="apple store" />
                    <img src="assets/img/app-store.png" alt="playstore" />
                  </div>
                </div>
              </div>
              <div className="reviews">
                <h3 className="reviews-title">Reviews</h3>
                <div className="reviews-body">
                  <div className="reviews-list">
                    <div className="one-review">
                      <div className="one-review-images">
                        <img className="person" src="assets/img/avatar.png" />
                        <div className="star">
                          <i className="icon-star" />
                        </div>
                        <img
                          className="restaurant"
                          src="assets/img/icon-restaurant.png"
                        />
                      </div>
                      <div className="one-review-text">
                        <span className="person">Lobna Kbayer</span> a évalué
                        <span className="restaurant">HOBOS Resto</span>
                      </div>
                      <div className="rating">
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="one-review">
                      <div className="one-review-images">
                        <img className="person" src="assets/img/avatar.png" />
                        <div className="star">
                          <i className="icon-star" />
                        </div>
                        <img
                          className="restaurant"
                          src="assets/img/icon-restaurant.png"
                        />
                      </div>
                      <div className="one-review-text">
                        <span className="person">Lobna Kbayer</span> a évalué
                        <span className="restaurant">HOBOS Resto</span>
                      </div>
                      <div className="rating">
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="one-review">
                      <div className="one-review-images">
                        <img className="person" src="assets/img/avatar.png" />
                        <div className="star">
                          <i className="icon-star" />
                        </div>
                        <img
                          className="restaurant"
                          src="assets/img/icon-restaurant.png"
                        />
                      </div>
                      <div className="one-review-text">
                        <span className="person">Lobna Kbayer</span> a évalué
                        <span className="restaurant">HOBOS Resto</span>
                      </div>
                      <div className="rating">
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                        <i className="fal fa-star" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="divider" />
                  <div className="reviews-options">
                    <span>Consulter plus de reviews</span>
                    <i className="icon-dots-horizontal" />
                  </div>
                </div>
              </div>
              <div className="promos-tak-tak">
                <div className="promos-tak-tak-header">
                  <h3 className="promos-title">Promos TAK TAK</h3>
                  <i className="icon-dots-horizontal" />
                </div>
                <div className="promos">
                  <div className="promo">
                    <img
                      src="assets/img/6faba7a30c26fb8ad06a842784a80722.png"
                      alt="promo tak tak"
                    />
                  </div>
                  <div className="promo">
                    <img
                      src="assets/img/6e7b74dc0f53f8fff799e1b32d704554.png"
                      alt="promo tak tak"
                    />
                  </div>
                </div>
              </div>
              <div className="card restaurant-post-card">
                <div className="restaurant-promos-my-besty-button">
                  <button>
                    <span className="button-my-besty">My Besty</span>
                    <i className="fal fa-star" aria-hidden="true" />
                  </button>
                </div>
                <div className="restaurant-post-card-header">
                  <div className="restaurant-post-card-photo">
                    <img src="assets/img/image2.jpg" alt="restaurant-post " />
                  </div>
                </div>
                <div className="restaurant-post-card-body">
                  <div className="restaurant-who-post-wrapper">
                    <div className="restaurant-who-post">
                      <div className="restaurant-who-post-info">
                        <div className="restaurant-who-post-info-avatar">
                          <img src="assets/img/8470a85bd9b5757cf4c46d9462be7259.png" />
                        </div>
                        <div className="restaurant-who-post-info-info">
                          <span className="restaurant-username">
                            Le 12ème Sky Lounge
                          </span>
                          <div className="restaurant-about">
                            <i className="icon-marker" />
                            <span>Tunis, Cuisine Chinoise</span>
                          </div>
                        </div>
                      </div>
                      <div className="restaurant-who-post-options">
                        <div className="cup-button">
                          <i className="fal fa-wine-glass-alt" />
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                          <span>Suivre</span>
                        </div>
                        <div className="more-options">
                          <i className="icon-dots-horizontal" />
                        </div>
                      </div>
                    </div>
                    <div className="restaurant-post-card-body-description">
                      Proin sit amet ipsum eget ante venenatis posuere. Maecenas
                      diam risus, accumsan at facilisis sit amet, eleifend et
                      arcu. Nam viverra pharetra condimentum. Vestibulum dui
                      metus, fringilla sed facilisis ut, congue ut tortor.
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="restaurant-post-card-footer">
                  <div className="restaurant-post-card-social-info">
                    <div className="restaurant-post-card-likes">
                      <i className="icon-heart" />
                      <span className="likes-number">33</span>
                    </div>
                    <div className="restaurant-post-card-comments">
                      <i className="icon-comment" />
                      <span className="comments-number">21</span>
                      <span className="comments-show-more">
                        Afficher commentaires
                      </span>
                    </div>
                    <div className="restaurant-post-card-comment-button">
                      <i className="icon-send" />
                    </div>
                  </div>
                  <div className="restaurant-post-card-comment">
                    <div className="restaurant-post-card-comment-avatar">
                      <img src="assets/img/mongi.png" />
                      <i className="fal fa-sort-down" aria-hidden="true" />
                    </div>
                    <div className="restaurant-post-card-comment-input">
                      <input
                        placeholder="Commenter ce restaurant-post"
                        className="restaurant-post-card-comment-input-field"
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
              <div className="besties">
                <div className="besties-header">
                  <h3 className="besties-title">Besties</h3>
                  <i className="icon-dots-horzizontal" />
                </div>
                <div className="besties-body">
                  <div className="one-besty">
                    <div className="one-besty-images">
                      <img className="restaurant" src="assets/img/hobos.png" />
                      <img className="person" src="assets/img/avatar.png" />
                      <div className="star">
                        <i className="fal fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="one-besty-description">
                      <p>
                        <span className="highlighted">Lobna Kbayer</span> a
                        identifié
                        <span className="highlighted">HOBOS Resto</span>
                        <br />
                        <span>
                          entant que son restaurant
                          <span className="highlighted-no-color">Besty</span>.
                        </span>
                      </p>
                    </div>
                    <div className="see-profile">
                      <button>Consulter son profile</button>
                    </div>
                  </div>
                  <div className="one-besty">
                    <div className="one-besty-images">
                      <img
                        className="restaurant"
                        src="assets/img/kidness.png"
                      />
                      <img className="person" src="assets/img/avatar.png" />
                      <div className="star">
                        <i className="fal fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="one-besty-description">
                      <p>
                        <span className="highlighted">Lobna Kbayer</span> a
                        identifié
                        <span className="highlighted">HOBOS Resto</span>
                        <br />
                        <span>
                          entant que son restaurant
                          <span className="highlighted-no-color">Besty</span>.
                        </span>
                      </p>
                    </div>
                    <div className="see-profile">
                      <button>Consulter son profile</button>
                    </div>
                  </div>
                  <div className="one-besty">
                    <div className="one-besty-images">
                      <img
                        className="restaurant"
                        src="assets/img/restaurant.png"
                      />
                      <img className="person" src="assets/img/avatar.png" />
                      <div className="star">
                        <i className="fal fa-star" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="one-besty-description">
                      <p>
                        <span className="highlighted">Lobna Kbayer</span> a
                        identifié
                        <span className="highlighted">HOBOS Resto</span>
                        <br />
                        <span>
                          entant que son restaurant
                          <span className="highlighted-no-color">Besty</span>.
                        </span>
                      </p>
                    </div>
                    <div className="see-profile">
                      <button>Consulter son profile</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="separator" />
              <div className="vente-flash-tak-tak">
                {/* <div class="vente-flash-tak-tak-header"> */}
                <div>
                  <i className="fal fa-rabbit-fast rabbit" />
                  <h3 className="vente-flash-title">Vente Flash</h3>
                </div>
                <i className="icon-dots-horizontal" />
                {/* </div> */}
              </div>
              <div className="card restaurant-post-card">
                <div className="restaurant-post-card-header">
                  <div className="restaurant-post-card-photo">
                    <img src="assets/img/image2.jpg" alt="restaurant-post " />
                  </div>
                </div>
                <div className="restaurant-post-card-body">
                  <div className="restaurant-who-post-wrapper">
                    <div className="restaurant-who-post">
                      <div className="restaurant-who-post-info">
                        <div className="restaurant-who-post-info-avatar">
                          <img src="assets/img/icon-restaurant.png" />
                        </div>
                        <div className="restaurant-who-post-info-info">
                          <span className="restaurant-username">
                            Moh Yamin Resto
                          </span>
                          <div className="restaurant-about">
                            <i className="icon-marker" />
                            <span>Tunis, Cuisine Chinoise</span>
                          </div>
                        </div>
                      </div>
                      <div className="restaurant-who-post-options">
                        <div className="cup-button">
                          <i className="fal fa-wine-glass-alt" />
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                          <span>Suivre</span>
                        </div>
                        <div className="more-options">
                          <i className="icon-dots-horizontal" />
                        </div>
                      </div>
                    </div>
                    <div className="restaurant-post-card-body-description-vente-flash">
                      <span className="title">
                        Proin sit amet ipsum eget ante venenatis posuere.
                      </span>
                      <div className="description">
                        <span>
                          {" "}
                          Maecenas diam risus, accumsan at facilisis sit amet,
                          eleifend et arcu. Nam viverra pharetra condimentum.
                          Vestibulum dui metus, fringilla sed facilisis ut,
                          congue ut tortor.
                        </span>
                        <span>
                          Curabitur luctus ornare pellentesque. Interdum et
                          malesuada fames ac ante ipsum primis in
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="restaurant-post-card-vente-flash-promo">
                    <div className="duration">
                      <span>Durée</span>
                      <span>23 : 19 : 05</span>
                    </div>
                    <button>Profitez maintenant</button>
                  </div>
                </div>
                <div className="restaurant-post-card-footer-vente-flash">
                  <div>
                    <span>Ils ont déjà profité</span>
                  </div>
                  <div className="shared-component-profil-img">
                    <img src="assets/img/Ellipse 378.png" />
                    <img src="assets/img/Ellipse 379.png" />
                    <img src="assets/img/Ellipse 380.png" />
                    <img src="assets/img/Ellipse 381.png" />
                    <img src="assets/img/Ellipse 382.png" />
                    <img src="assets/img/Ellipse 383.png" />
                    <img src="assets/img/Ellipse 384.png" />
                    <span id="profil-img-number">+13</span>
                  </div>
                </div>
              </div>
              <div className="gestion-de-residus-tak-tak">
                <h3 className="gestion-de-residus-title">Gestion de Résidus</h3>
                <i className="icon-dots-horizontal" />
              </div>
              <div className="card restaurant-post-card">
                <div className="restaurant-post-card-body">
                  <div className="restaurant-who-post-wrapper">
                    <div className="restaurant-who-post">
                      <div className="restaurant-who-post-info">
                        <div className="restaurant-who-post-info-avatar">
                          <img src="assets/img/svg/5a12b1d39ffb6402808768c7b561a90b.png" />
                        </div>
                        <div className="restaurant-who-post-info-info">
                          <span className="restaurant-username">
                            Popeyes Restaurant
                          </span>
                          <div className="restaurant-about">
                            <i className="icon-marker" />
                            <span>Tunis, Cuisine Chinoise</span>
                          </div>
                        </div>
                      </div>
                      <div className="restaurant-who-post-options">
                        <div className="cup-button">
                          <i className="fal fa-wine-glass-alt" />
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                          <span>Suivre</span>
                        </div>
                        <div className="more-options">
                          <i className="icon-dots-horizontal" />
                        </div>
                      </div>
                    </div>
                    <div className="restaurant-who-made-a-donation">
                      <span>A fait un Don pour l’association</span>
                    </div>
                    <div className="association">
                      <img
                        className="association-img"
                        src="assets/img/eb255963c2a2ba64893f3cc6c805b593.png"
                        alt=""
                      />
                      <div className="association-information">
                        <span className="association-name">
                          Association Rahma
                        </span>
                        <div className="association-location">
                          <i className="icon-marker" />
                          <span className="adress">Marsa, Tunis</span>
                        </div>
                        <span className="association-description">
                          Maecenas diam risus, accumsan at facilisis sit amet,
                          eleifend et arcu. Nam viverra pharetra condimentum.
                          Vestibulum dui metus, fringilla{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="restaurant-post-card-footer-gestion-de-residus">
                  <div className="left-side">
                    <div>
                      <span>Ils ont déjà fait un don</span>
                    </div>
                    <div className="shared-component-profil-img">
                      <img src="assets/img/Ellipse 378.png" />
                      <img src="assets/img/Ellipse 379.png" />
                      <img src="assets/img/Ellipse 380.png" />
                      <img src="assets/img/Ellipse 381.png" />
                      <img src="assets/img/Ellipse 382.png" />
                      <img src="assets/img/Ellipse 384.png" />
                      <span id="profil-img-number">+13</span>
                    </div>
                  </div>
                  <div className="right-side">
                    <button>Plus de détails</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="feed-secondary">
              <button className="book-restaurant">
                <div className="booking-button">
                  <i className="icon-chair" />
                  <span className="title">Réservez</span>
                  <a
                    className="span-hover"
                    href="booking-page-process-CTA.html"
                  >
                    Réservez un Restaurant
                  </a>
                  <i className="icon-small-arrow-right arrow" />
                </div>
                <div className="commander-button">
                  <i className="fal fa-shopping-basket" />
                  <span className="title">Commander</span>
                  <span className="span-hover">Commander un menu</span>
                  <i className="icon-small-arrow-right arrow" />
                </div>
                {/* <span>Réservez un restaurant</span> */}
                {/*  */}
              </button>
              <div className="achievement">
                <div className="achievement-avatar">
                  <img src="assets/img/avatar.png" />
                </div>
                <div className="achievement-info">
                  <span className="info-title">Achèvement du profil</span>
                  <div className="achievement-items">
                    <span className="item filled" />
                    <span className="item filled" />
                    <span className="item filled" />
                    <span className="item filled" />
                    <span className="item" />
                    <span className="item" />
                  </div>
                  <span className="steps-left-feeds">Encore 2 étapes</span>
                </div>
                <i className="icon-small-arrow-right" />
              </div>
              <div className="taktak-visit">
                <div className="taktak-visit-title">
                  <span className="title">Visite guidée sur TAKTAK</span>
                  <span className="description">
                    Explorez notre plateforme d’une façon intéractive et
                    découvrez nos services.
                  </span>
                </div>
                <div className="taktak-visit-video">
                  <i className="far fa-play-circle" />
                </div>
              </div>
              <div className="maps">
                <img src="assets/img/maps.png" alt="" />
                <div className="show-134-restos">
                  <span>Afficher nos 134 Restos sur map</span>
                </div>
              </div>
              <div className="title-feed-secondary">
                <span>Derniers venus</span>
              </div>
              <div className="profiles-last-comer">
                <div className="profil-visitor">
                  <div className="visitor">
                    <div className="visitor-avatar">
                      <img src="assets/img/rafika-bella.png" />
                    </div>
                    <div className="visitor-info">
                      <span className="user-username">Alex</span>
                      <div className="user-about">
                        <i
                          className="fal fa-map-marker-alt"
                          aria-hidden="true"
                        />
                        <span> Mado Café &amp; Resto</span>
                      </div>
                    </div>
                  </div>
                  <div className="follow-button">
                    <i className="icon-add-friend" />
                  </div>
                </div>
                <div className="profil-visitor">
                  <div className="visitor">
                    <div className="visitor-avatar">
                      <img src="assets/img/rafika-bella.png" />
                    </div>
                    <div className="visitor-info">
                      <span className="user-username">Alex</span>
                      <div className="user-about">
                        <i
                          className="fal fa-map-marker-alt"
                          aria-hidden="true"
                        />
                        <span> Mado Café &amp; Resto</span>
                      </div>
                    </div>
                  </div>
                  <div className="follow-button">
                    <i className="icon-add-friend" />
                  </div>
                </div>
                <div className="profil-visitor">
                  <div className="visitor">
                    <div className="visitor-avatar">
                      <img src="assets/img/rafika-bella.png" />
                    </div>
                    <div className="visitor-info">
                      <span className="user-username">Alex</span>
                      <div className="user-about">
                        <i
                          className="fal fa-map-marker-alt"
                          aria-hidden="true"
                        />
                        <span> Mado Café &amp; Resto</span>
                      </div>
                    </div>
                  </div>
                  <div className="follow-button">
                    <i className="icon-add-friend" />
                  </div>
                </div>
              </div>
              <div className="separator2" />
              <div className="title-feed-secondary">
                <span>Améliorer votre Journal</span>
              </div>
              <div className="list-to-dos">
                <div className="to-do-item">
                  <i className="fal fa-check-circle" />
                  <span className="to-do">Suivre 10 restaurants</span>
                </div>
                <div className="to-do-item">
                  <i className="fal fa-check-circle" />
                  <span className="to-do">
                    Ajouter 10 personnes à ta liste d’amis
                  </span>
                </div>
                <div className="to-do-item">
                  <i className="fal fa-check-circle" />
                  <span className="to-do">Poster ton premier story</span>
                </div>
                <div className="to-do-item">
                  <i className="fal fa-check-circle" />
                  <span className="to-do">Poster un article dans Blog</span>
                </div>
                <div className="show-missions">
                  <span>Afficher plus de missions</span>
                </div>
                <a className="list-to-dos-footer" href="taktak-points.html">
                  <span className="your-balance">Votre balance</span>
                  <div className="sold-wintak">
                    <span className="sold">367</span>
                    <span className="wintak">WinTak</span>
                  </div>
                  <div className="right">
                    <i className="fal fa-angle-right" />
                  </div>
                </a>
              </div>
              <div className="title-feed-secondary">
                Suggestion des restaurants
              </div>
              <div className="restaurants">
                <div className="restaurant">
                  <img
                    src="assets/img/2e0dc16abd829f5af42b71ed33f2a82d.png"
                    className="pict-of-res"
                  />
                  <div className="restaurant-right-side">
                    <img
                      src="assets/img/3f08a2ba008fd3dd0d8090b4d7ab82d8.png"
                      className="logo"
                    />
                    <div className="restaurant-details">
                      <span className="restaurant-name">Belle Restaurant</span>
                      <div className="restaurant-location">
                        <i className="fal fa-map-marker-alt" />
                        <span className="restaurant-adress">
                          Tunis, Cuisine traditionelle
                        </span>
                      </div>
                      <div className="star-rating">
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                        <i className="fal fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="restaurant">
                  <img
                    src="assets/img/2e0dc16abd829f5af42b71ed33f2a82d.png"
                    className="pict-of-res"
                  />
                  <div className="restaurant-right-side">
                    <div className="logo">
                      <img
                        src="assets/img/3f08a2ba008fd3dd0d8090b4d7ab82d8.png"
                        alt=""
                      />
                    </div>
                    <div className="restaurant-details">
                      <span className="restaurant-name">Belle Restaurant</span>
                      <div className="restaurant-location">
                        <i className="fal fa-map-marker-alt" />
                        <span className="restaurant-adress">
                          Tunis, Cuisine traditionelle
                        </span>
                      </div>
                      <div className="star-rating">
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
              <div className="title-feed-secondary">
                <span>Foodiste de la semaine</span>
              </div>
              <div className="foodliste-week-profile">
                <div className="profil-foodlist">
                  <div className="visitor">
                    <div className="visitor-avatar">
                      <img src="assets/img/rafika-bella.png" />
                    </div>
                    <div className="visitor-info">
                      <span className="user-username">Karima Swilah</span>
                      <div className="user-about">
                        <i
                          className="fal fa-map-marker-alt"
                          aria-hidden="true"
                        />
                        <span> Marsa, Tunis</span>
                      </div>
                    </div>
                  </div>
                  <div className="follow-button">
                    <i className="icon-add-friend" />
                  </div>
                </div>
                <div className="foodliste-week-footer">
                  <div className="item">
                    <div className="outside-circle">
                      <div className="circle-orange">
                        <i className="fal fa-mobile-android" />
                      </div>
                    </div>
                    <span>36 stories</span>
                  </div>
                  <div className="item">
                    <div className="outside-circle">
                      <div className="circle-orange">
                        <i className="fal fa-mobile-android" />
                      </div>
                    </div>
                    <span>4 articles</span>
                  </div>
                  <div className="item">
                    <div className="outside-circle">
                      <div className="circle-orange">
                        <i className="fal fa-mobile-android" />
                      </div>
                    </div>
                    <span>16 posts</span>
                  </div>
                  <div className="item">
                    <div className="outside-circle">
                      <div className="circle-orange">
                        <i className="fal fa-mobile-android" />
                      </div>
                    </div>
                    <span>28 restos</span>
                  </div>
                </div>
              </div>
              <div className="most-read-articles">
                <span className="title-feed-secondary">
                  Articles les plus lus
                </span>
                <span className="show">Voir tout</span>
              </div>
              <div
                className="orbit"
                data-auto-play="false"
                role="region"
                data-orbit="kwf537-orbit"
                data-use-m-u-i="false"
                data-resize="esym5o-orbit"
                id="esym5o-orbit"
                data-events="resize"
              >
                <div className="orbit-controls">
                  <button className="orbit-previous" tabIndex={0}>
                    <span className="show-for-sr">Previous Slide</span>
                  </button>
                  <button className="orbit-next" tabIndex={0}>
                    <span className="show-for-sr">Next Slide</span>
                  </button>
                </div>
                <div className="orbit-wrapper-feed-secondary">
                  <ul className="orbit-content" tabIndex={0}>
                    <li
                      className="is-active orbit-slide no-motionui"
                      data-slide={0}
                    >
                      <div className="post-card-header">
                        <div className="post-card-photo" />
                        <img src="assets/img/33a033a489378e066e29560a20381466.png" />
                      </div>
                      <div className="post-card-body">
                        <div className="user-who-post-wrapper">
                          <span className="post-card-title">
                            Catégorie Culinaire
                          </span>
                          <span className="post-card-subtitle">
                            Pellentesque fringilla, ex at scelerisque sagittis
                          </span>
                          <span className="post-card-description">
                            Suspendisse placerat venenatis iaculis. Nam id
                            hendrerit mauris, a lacinia ex. Cras sollicitudin at
                            nibh eu ullamcorper. Duis hendrerit massa vel justo
                            pellentesque vehicula. Proin
                          </span>
                        </div>
                      </div>
                      <div className="profil-foodlist">
                        <div className="visitor">
                          <div className="visitor-avatar">
                            <img src="assets/img/rafika-bella.png" />
                          </div>
                          <div className="visitor-info">
                            <span className="user-username">Karima Swilah</span>
                            <div className="user-about">
                              <i
                                className="fal fa-map-marker-alt"
                                aria-hidden="true"
                              />
                              <span> Marsa, Tunis</span>
                            </div>
                          </div>
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                        </div>
                      </div>
                    </li>
                    {/* end */}
                    <li
                      className="is-active orbit-slide no-motionui"
                      data-slide={1}
                    >
                      <div className="post-card-header">
                        <div className="post-card-photo" />
                        <img src="assets/img/33a033a489378e066e29560a20381466.png" />
                      </div>
                      <div className="post-card-body">
                        <div className="user-who-post-wrapper">
                          <span className="post-card-title">
                            Catégorie Culinaire
                          </span>
                          <span className="post-card-subtitle">
                            Pellentesque fringilla, ex at scelerisque sagittis
                          </span>
                          <span className="post-card-description">
                            Suspendisse placerat venenatis iaculis. Nam id
                            hendrerit mauris, a lacinia ex. Cras sollicitudin at
                            nibh eu ullamcorper. Duis hendrerit massa vel justo
                            pellentesque vehicula. Proin
                          </span>
                        </div>
                      </div>
                      <div className="profil-foodlist">
                        <div className="visitor">
                          <div className="visitor-avatar">
                            <img src="assets/img/rafika-bella.png" />
                          </div>
                          <div className="visitor-info">
                            <span className="user-username">Mongi</span>
                            <div className="user-about">
                              <i
                                className="fal fa-map-marker-alt"
                                aria-hidden="true"
                              />
                              <span> Marsa, Tunis</span>
                            </div>
                          </div>
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                        </div>
                      </div>
                    </li>
                    {/* end */}
                    <li
                      className="is-active orbit-slide no-motionui"
                      data-slide={2}
                    >
                      <div className="post-card-header">
                        <div className="post-card-photo" />
                        <img src="assets/img/33a033a489378e066e29560a20381466.png" />
                      </div>
                      <div className="post-card-body">
                        <div className="user-who-post-wrapper">
                          <span className="post-card-title">
                            Catégorie Culinaire
                          </span>
                          <span className="post-card-subtitle">
                            Pellentesque fringilla, ex at scelerisque sagittis
                          </span>
                          <span className="post-card-description">
                            Suspendisse placerat venenatis iaculis. Nam id
                            hendrerit mauris, a lacinia ex. Cras sollicitudin at
                            nibh eu ullamcorper. Duis hendrerit massa vel justo
                            pellentesque vehicula. Proin
                          </span>
                        </div>
                      </div>
                      <div className="profil-foodlist">
                        <div className="visitor">
                          <div className="visitor-avatar">
                            <img src="assets/img/rafika-bella.png" />
                          </div>
                          <div className="visitor-info">
                            <span className="user-username">Mohamed Amine</span>
                            <div className="user-about">
                              <i
                                className="fal fa-map-marker-alt"
                                aria-hidden="true"
                              />
                              <span> Marsa, Tunis</span>
                            </div>
                          </div>
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                        </div>
                      </div>
                    </li>
                    {/* end */}
                    <li
                      className="is-active orbit-slide no-motionui"
                      data-slide={3}
                    >
                      <div className="post-card-header">
                        <div className="post-card-photo" />
                        <img src="assets/img/33a033a489378e066e29560a20381466.png" />
                      </div>
                      <div className="post-card-body">
                        <div className="user-who-post-wrapper">
                          <span className="post-card-title">
                            Catégorie Culinaire
                          </span>
                          <span className="post-card-subtitle">
                            Pellentesque fringilla, ex at scelerisque sagittis
                          </span>
                          <span className="post-card-description">
                            Suspendisse placerat venenatis iaculis. Nam id
                            hendrerit mauris, a lacinia ex. Cras sollicitudin at
                            nibh eu ullamcorper. Duis hendrerit massa vel justo
                            pellentesque vehicula. Proin
                          </span>
                        </div>
                      </div>
                      <div className="profil-foodlist">
                        <div className="visitor">
                          <div className="visitor-avatar">
                            <img src="assets/img/rafika-bella.png" />
                          </div>
                          <div className="visitor-info">
                            <span className="user-username">Ahlem</span>
                            <div className="user-about">
                              <i
                                className="fal fa-map-marker-alt"
                                aria-hidden="true"
                              />
                              <span> Marsa, Tunis</span>
                            </div>
                          </div>
                        </div>
                        <div className="follow-button">
                          <i className="icon-add-friend" />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <nav className="orbit-bullets">
                  <button
                    className="bullet first-slide is-active"
                    data-slide={0}
                  >
                    <span className="show-for-sr">First slide details.</span>
                    <span className="show-for-sr" data-slide-active-label>
                      Current Slide
                    </span>
                  </button>
                  <button className="bullet" data-slide={1}>
                    <span className="show-for-sr">Second slide details.</span>
                  </button>
                  <button className="bullet" data-slide={2}>
                    <span className="show-for-sr">Third slide details.</span>
                  </button>
                  <button className="bullet" data-slide={3}>
                    <span className="show-for-sr">Fourth slide details.</span>
                  </button>
                </nav>
              </div>
              <div className="separator" />
              <div className="sodexo">
                <img
                  src="assets/img/ed7694092b8d8255ce5a434e3fc2639a.png"
                  alt=""
                />
                <span>ESPACE PUB</span>
              </div>
              <div className="top-foodies">
                <ul className="tabs" data-tabs id="foodies-tabs">
                  <li className="tabs-title is-active">
                    <a href="#fpanel1" aria-selected="true">
                      TOP5 Foodies
                    </a>
                  </li>
                  <li className="tabs-title">
                    <a data-tabs-target="fpanel2" href="#fpanel2">
                      Best Photo
                    </a>
                  </li>
                  <li className="tabs-title">
                    <a data-tabs-target="fpanel3" href="#fpanel3">
                      Best Blogger
                    </a>
                  </li>
                </ul>
                <div
                  className="tabs-content foodies-tabs-content"
                  data-tabs-content="foodies-tabs"
                >
                  <div className="tabs-panel is-active" id="fpanel1">
                    <div className="one-foodie">
                      <span className="one-foodie-number">#1</span>
                      <img className="avatar" src="assets/img/avatar.png" />
                      <div className="one-foodie-info">
                        <span className="one-foodie-info-name">Imen</span>
                        <p>
                          38 Restos visités . 51 photos prises . 19 posts
                          partagés
                        </p>
                      </div>
                    </div>
                    <div className="one-foodie">
                      <span className="one-foodie-number">#2</span>
                      <img className="avatar" src="assets/img/avatar.png" />
                      <div className="one-foodie-info">
                        <span className="one-foodie-info-name">Imen</span>
                        <p>
                          38 Restos visités . 51 photos prises . 19 posts
                          partagés
                        </p>
                      </div>
                    </div>
                    <div className="one-foodie">
                      <span className="one-foodie-number">#3</span>
                      <img className="avatar" src="assets/img/avatar.png" />
                      <div className="one-foodie-info">
                        <span className="one-foodie-info-name">Imen</span>
                        <p>
                          38 Restos visités . 51 photos prises . 19 posts
                          partagés
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tabs-panel" id="fpanel2">
                    <div className="one-foodie">
                      <span className="one-foodie-number">#1</span>
                      <img className="avatar" src="assets/img/avatar.png" />
                      <div className="one-foodie-info">
                        <span className="one-foodie-info-name">Imen</span>
                        <p>
                          38 Restos visités . 51 photos prises . 19 posts
                          partagés
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="tabs-panel" id="fpanel3">
                    <div className="one-foodie">
                      <span className="one-foodie-number">#1</span>
                      <img className="avatar" src="assets/img/avatar.png" />
                      <div className="one-foodie-info">
                        <span className="one-foodie-info-name">Imen</span>
                        <p>
                          38 Restos visités . 51 photos prises . 19 posts
                          partagés
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
          <div className="create-profile-restaurant">
            <span className="title-header">Créer un nouveau restaurant</span>
            <div className="add-picture-media">
              <div className="profile-picture">
                <i className="fal fa-portrait" />
                <span id="dropzone3">
                  Glissez directement votre photo de profile
                </span>
                {/* <input type="text" name="" id="here" placeholder="Parcourir mes photos"> */}
                <span className="here3">Parcourir mes photos</span>
              </div>
              <div className="cover-picture">
                <i className="fal fa-image" />
                <span id="dropzone4">
                  Glissez directement votre photo de couverture
                </span>
                <span className="here">Parcourir mes photos</span>
              </div>
            </div>
            <div className="instruction-media">
              <span className="instruction-pict-profile">
                Photo ne doit pas dépasser 500 ko Formats acceptées: .jpeg .gif
                .png
              </span>
              <span className="instruction-pict-cover">
                Photo ne doit pas dépasser 1 Mo. Format idéal{" "}
                <strong> 1366x280</strong>
                Formats acceptées: .jpeg .gif .png
              </span>
            </div>
            <div className="restaurant-informations">
              <div className="basic-information">
                <input type="text" placeholder="Nom restaurant" />
                <input type="text" placeholder="N° Téléphone" />
              </div>
              <div className="details-information">
                <input
                  type="text"
                  placeholder="Description"
                  className="description"
                />
                <input
                  type="text"
                  placeholder="Tags (confirmer votre tag en appuyant sur Entrée)"
                  className="confirmation"
                />
              </div>
              <div className="services">
                <span>Sélectionner les services existants</span>
                <div className="service-item">
                  <i className="fal fa-wine-glass-alt" />
                  <span>Alcool</span>
                </div>
                <div className="service-item">
                  <i className="fal fa-wifi" />
                  <span>Wifi</span>
                </div>
                <div className="service-item">
                  <i className="fal fa-futbol" />
                  <span>Match</span>
                </div>
                <div className="service-item">
                  <i className="fal fa-parking" />
                  <span>Parking</span>
                </div>
                <div className="service-item">
                  <i className="fal fa-child" />
                  <span>Air de jeu</span>
                </div>
                <div className="service-item">
                  <i className="fal fa-baby" />
                  <span>Siège bébé</span>
                </div>
                <div className="service-item">
                  <i className="fal fa-users" />
                  <span>Groupe</span>
                </div>
              </div>
              <div className="detailed-information">
                <div className="input-item">
                  <i className="fal fa-calendar-alt calendar-ion" />
                  <input type="text" placeholder="Horaires d’ouverture" />
                </div>
                <div className="input-item">
                  <i className="fal fa-bars" />
                  <input type="text" placeholder="Cuisine" />
                </div>
                <input type="text" placeholder="Coût moyen en DT" />
              </div>
              <div className="payment-method">
                <span>Moyen de payement</span>
                <div className="mode-of-payment">
                  <span>Espèce</span>
                  <label className="switch">
                    <input type="checkbox" className="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className="mode-of-payment">
                  <span>Carte bancaire</span>
                  <label className="switch">
                    <input type="checkbox" className="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className="mode-of-payment">
                  <span>Chèque</span>
                  <label className="switch">
                    <input type="checkbox" className="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
                <div className="mode-of-payment">
                  <span>D17</span>
                  <label className="switch">
                    <input type="checkbox" className="checkbox" />
                    <span className="slider round" />
                  </label>
                </div>
              </div>
              <div className="create-restaurant-bottom">
                <div>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="checkbox-1"
                    name="checkbox"
                  />
                  <label htmlFor="checkbox-1" />
                  <span>
                    J’accorde à TakTak les droits de publier mes données
                    personnelles sur la plateforme
                  </span>
                </div>
                <button>Confirmer</button>
              </div>
            </div>
          </div>
          <div className="show-story">
            <div className="story-feeds">
              <div
                className="orbit"
                data-auto-play="false"
                role="region"
                data-orbit
                data-use-m-u-i="false"
              >
                <div className="orbit-controls">
                  <button className="orbit-previous">
                    <span className="show-for-sr">Previous Slide</span>◀︎
                  </button>
                  <button className="orbit-next">
                    <span className="show-for-sr">Next Slide</span>▶︎
                  </button>
                </div>
                <div className="orbit-wrapper">
                  <div className="onboarding-bottom">
                    <button className="arrow prev">
                      <i className="icon-arrow-left" />
                    </button>
                    <div className="story-user-details">
                      <img src="assets/img/rafika-bella.png" alt="" />
                      <span>Rafika bella</span>
                    </div>
                    <nav className="orbit-bullets">
                      <button
                        className="bullet first-slide is-active"
                        data-slide={1}
                      >
                        <span className="show-for-sr">
                          First slide details.
                        </span>
                        <span className="show-for-sr" data-slide-active-label>
                          Current Slide
                        </span>
                      </button>
                      <button className="bullet" data-slide={2}>
                        <span className="show-for-sr">
                          Second slide details.
                        </span>
                      </button>
                      <button className="bullet" data-slide={3}>
                        <span className="show-for-sr">
                          Third slide details.
                        </span>
                      </button>
                      <button className="bullet" data-slide={4}>
                        <span className="show-for-sr">
                          Fourth slide details.
                        </span>
                      </button>
                    </nav>
                    <button className="arrow next">
                      <i className="icon-arrow-right" />
                    </button>
                  </div>
                  <ul className="orbit-container">
                    <li className="is-active orbit-slide">
                      <img src="assets/img/picture-for-story.png" />
                    </li>
                    <li className="is-active orbit-slide">
                      <img src="assets/img/picture-for-story.png" />
                    </li>
                    <li className="is-active orbit-slide">
                      <img src="assets/img/picture-for-story.png" />
                    </li>
                    <li className="is-active orbit-slide">
                      <img src="assets/img/picture-for-story.png" />
                    </li>
                    <i className="fal fa-times close" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
