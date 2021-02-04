import React, { useContext } from "react";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileNaveBar from "./ProfileNaveBar";
import Description from "./Description";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Photos from "./Photos";
import Checkins from "./Checkins";
import Evaluations from "./Evaluations";
import DashBoard from "./DashBoard";
import { UiContext } from "../../context/UiContext";
import PostModal from "../post/PostModal";
import LocationCheckins from "./LocationCheckins";
function Profile(props) {
  const user = {
    firstName: "Boti",
    lastName: "Francesco",
    profileImage: "https://picsum.photos/200",
    email: "francescoBoti@taktak.com",
    phone: "+216 62 626 262",
    tags: ["foodist", "friends", "pasta"],
    location: "khzema, Sousse",
    uFollowers: 200,
    rFollowers: 100,
  
    description:
      "Proin sit amet ipsum eget ante venenatis posuere. Maecenas diam risus, accumsan at facilisis sit amet, eleifend et arcu. Nam viverra pharetra condimentum. Vestibulum dui metus, fringilla sed facilisis ut, congue ut tortor.",
    birthDate: { value: "09 / 01 / 1980", show: false },
    city: "Sousse",
    languages: ["Ar", "Fr", "En"],
    photos: [{}, {}, {}],
    stories: [
      { date: "07/07" },
      { date: "08/08" },
      { date: "09/09" },
      { date: "10/07" },
      { date: "76/07" },
    ],
    followers: {
      number: 222,
      sample: [
        {
          userName: "follwer1",
          profileImage: "https://picsum.photos/500/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer2",
          profileImage: "https://picsum.photos/100/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer3",
          profileImage: "https://picsum.photos/300/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer4",
          profileImage: "https://picsum.photos/222/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer5",
          profileImage: "https://picsum.photos/400/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer6",
          profileImage: "https://picsum.photos/333/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer7",
          profileImage: "https://picsum.photos/444/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer8",
          profileImage: "https://picsum.photos/555/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer9",
          profileImage: "https://picsum.photos/666/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer10",
          profileImage: "https://picsum.photos/777/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer11",
          profileImage: "https://picsum.photos/800/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer12",
          profileImage: "https://picsum.photos/900/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer1",
          profileImage: "https://picsum.photos/500/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer2",
          profileImage: "https://picsum.photos/100/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer3",
          profileImage: "https://picsum.photos/300/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer4",
          profileImage: "https://picsum.photos/222/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer5",
          profileImage: "https://picsum.photos/400/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer6",
          profileImage: "https://picsum.photos/333/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer7",
          profileImage: "https://picsum.photos/444/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer8",
          profileImage: "https://picsum.photos/555/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer9",
          profileImage: "https://picsum.photos/666/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer10",
          profileImage: "https://picsum.photos/777/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer11",
          profileImage: "https://picsum.photos/800/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follwer12",
          profileImage: "https://picsum.photos/900/300",
          location: "Sousse, Tunisia",
        },
      ],
    },
    follows: {
      number: 300,
      sample: [
        {
          userName: "follow1",
          profileImage: "https://picsum.photos/22/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow2",
          profileImage: "https://picsum.photos/443/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow3",
          profileImage: "https://picsum.photos/234/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow4",
          profileImage: "https://picsum.photos/543/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow5",
          profileImage: "https://picsum.photos/654/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow6",
          profileImage: "https://picsum.photos/454/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow7",
          profileImage: "https://picsum.photos/343/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow8",
          profileImage: "https://picsum.photos/745/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow9",
          profileImage: "https://picsum.photos/232/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow10",
          profileImage: "https://picsum.photos/555/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow11",
          profileImage: "https://picsum.photos/444/300",
          location: "Sousse, Tunisia",
        },
        {
          userName: "follow12",
          profileImage: "https://picsum.photos/222/300",
          location: "Sousse, Tunisia",
        },
      ],
    },
    rFollows: {
      number: 45,
      sample: [
        {
          userName: "Restaurant1",
          profileImage: "https://picsum.photos/500/300",
          location: "Sousse, Tunisia",
          rating: 1,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant2",
          profileImage: "https://picsum.photos/100/300",
          location: "Sousse, Tunisia",
          rating: 0,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant3",
          profileImage: "https://picsum.photos/300/300",
          location: "Sousse, Tunisia",
          rating: 2,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant4",
          profileImage: "https://picsum.photos/222/300",
          location: "Sousse, Tunisia",
          rating: 5,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant5",
          profileImage: "https://picsum.photos/400/300",
          location: "Sousse, Tunisia",
          rating: 2,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant6",
          profileImage: "https://picsum.photos/333/300",
          location: "Sousse, Tunisia",
          rating: 1,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant7",
          profileImage: "https://picsum.photos/444/300",
          location: "Sousse, Tunisia",
          rating: 3,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant8",
          profileImage: "https://picsum.photos/555/300",
          location: "Sousse, Tunisia",
          rating: 2,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant9",
          profileImage: "https://picsum.photos/666/300",
          location: "Sousse, Tunisia",
          rating: 3,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant10",
          profileImage: "https://picsum.photos/777/300",
          location: "Sousse, Tunisia",
          rating: 3,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant11",
          profileImage: "https://picsum.photos/800/300",
          location: "Sousse, Tunisia",
          rating: 3,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
        {
          userName: "Restaurant12",
          profileImage: "https://picsum.photos/900/300",
          location: "Sousse, Tunisia",
          rating: 3,
          descrition:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices quam ac augue efficitur porttitor. Nunc gravida tortor vestibulum.",
        },
      ],
    },
  };
  const { openModalPost, setOpenModalPost } = useContext(UiContext);
  const { contentInPostModal, setContentInPostModal } = useContext(UiContext);
  const { indexOfClickedElement, setIndexOfClickedElement } = useContext(
    UiContext
  );
  const { handleClosePostModal } = useContext(UiContext);
  return (
   <div>
      <PostModal
    data={contentInPostModal}
    index={indexOfClickedElement}
    open={openModalPost}
    handleClose={handleClosePostModal}
  />
    <Router>
   
      <Switch>
        <div className="user-foodlist-profile-page">
          <div className="user-foodlist-profile-page-content">
         
            <ProfileHeader user={user} />
            <div className="user-foodlist-profile-page-content-feed container">
              <div className="feed-main">
                <ProfileNaveBar />
                <div className="tabs-content" data-tabs-content="example-tabs">
                  <Route exact path="/profile">
                    <Description user={user} />
                  </Route>
                  <Route exact path="/profile/photos" component={Photos} />
                  <Route exact path="/profile/checkins" component={Checkins} />
                  <Route exact path="/profile/checkins/location" component={LocationCheckins} />
                  <Route
                    exact
                    path="/profile/evaluations"
                    component={Evaluations}
                  />
                  <Route
                    exact
                    path="/profile/dashboard"
                    component={DashBoard}
                  />
                </div>
              </div>
            
          
            <div className="feed-secondary">
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
                  <span className="steps-left">Encore 2 étapes</span>
                </div>
                <i className="icon-small-arrow-right" />
              </div>
              <div className="restaurant-management">
                <div className="title">
                  <i className="fal fa-utensils-alt" />
                  <span>Gestion des restaurants</span>
                </div>
                <div className="restaurant-item">
                  <img
                    src="assets/img/88d2ce29261b4fdd1f5bf2e2bfb17b9b.png"
                    alt=""
                  />
                  <div className="information">
                    <span className="name">BUBO Resto</span>
                    <div className="dashboard">
                      <i className="fal fa-tachometer-alt-fast" />
                      <span>Tableau de board</span>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="restaurant-item">
                  <img
                    src="assets/img/87dca6b0c111744707fd2444a90cdfd4.png"
                    alt=""
                  />
                  <div className="information">
                    <span className="name">BUBO Resto</span>
                    <div className="dashboard">
                      <i className="fal fa-tachometer-alt-fast" />
                      <span>Tableau de board</span>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <a className="balance" href="taktak-points.html">
                <img src="assets/img/row_.png" alt="" />
                <div className="your-balance">
                  <span className="title">Votre balance</span>
                  <div className="sold">
                    <span className="numb">367</span>
                    <span className="wintak">Wintak</span>
                  </div>
                </div>
                <i className="fal fa-angle-right" aria-hidden="true" />
              </a>
              <div className="shared-location">
                <div className="shared-location-first-title">
                  <span>Vous êtes à Sousse</span>
                </div>
                <div className="shared-component-location-maps">
                  <div>
                    <img src="assets/img/svg/map.png" />
                  </div>
                  <div className="shared-profil">
                    <div className="title">
                      <span>Profiles de la même région que vous </span>
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
                  <div className="shared-restaurant">
                    <div className="title">
                      <span>Restaurants près de chez vous </span>
                    </div>
                    <div className="shared-restaurant-img">
                      <img src="assets/img/357d3aecd0be6646f3d4d11f685fd7f5.png" />
                      <img src="assets/img/87dca6b0c111744707fd2444a90cdfd4.png" />
                      <img src="assets/img/5b2f41620c6b7c86ee12346c7302d100.png" />
                      <img src="assets/img/3edbf28ac32161dc9746fe40538d3ace.png" />
                      <img src="assets/img/726ac3be779fcf94630e79c38d5735ef.png" />
                      <span id="profil-img-number">+4</span>
                    </div>
                    <span className="show-all">Voir tout</span>
                  </div>
                </div>
              </div>
              <div className="last-visit-restaurant">
                <div className="last-visit-restaurant-title">
                  <span>Dernières visites à ce restaurant</span>
                </div>
                <div className="last-visit-restaurant-profil">
                  <img src="assets/img/Ellipse 379.png" />
                  <img src="assets/img/Ellipse 382.png" />
                  <img src="assets/img/svg/Ellipse 380.png" />
                  <span>
                    {" "}
                    <strong>Moez</strong>,<strong>Sana</strong> et 7 autres
                    personnes
                  </span>
                </div>
              </div>
              <div className="invite-friends">
                <div className="invite-friends-title">
                  Invitez vos amis à nous rejoindre
                </div>
                <p>
                  Envoyez une invitation par e-mail pour nous rejoindre et
                  recevez
                  <strong className="highlighted">100 TAKAK</strong> pour chaque{" "}
                  <strong> 5 inscriptions confirmées</strong>.
                </p>
                <div className="invite-input">
                  <label>Adresse e-mail</label>
                  <input type="text" placeholder="Ex: mongi@email.com" />
                  <i className="fal fa-paper-plane" />
                </div>
              </div>
            </div>
          </div>
          </div>
        
          <div className="user-foodlist-add-profile-picture">
            <span className="title-header">Photo de profile</span>
            <div className="circle" id="dropzone2">
              <i className="fal fa-portrait" />
              <span className="import-picture-first-methode">
                Glissez directement votre photo ici
              </span>
              <div className="import-picture-second-methode" id>
                <span className="here">Importer photos</span>
              </div>
            </div>
            <div className="user-foodlist-add-profile-picture-bottom">
              <span className="profil-picture-instruction">
                Photo ne doit pas dépasser 500 ko Formats acceptées: .jpeg .gif
                .png
              </span>
              <span className="profil-picture-third-methode">
                Parcourir mes photos
              </span>
              <button className="confirm"> Confirmer</button>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
    </div>
  );
}

Profile.propTypes = {};

export default Profile;
