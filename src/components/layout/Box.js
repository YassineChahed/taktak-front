import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'

function Box(props) {
    const {showBox,handleClick} = props;
    const [displayBox, setDisplayBox] = useState(false)
   
    useEffect(() => {
       setDisplayBox(!showBox)
       console.log(showBox)
    }, [showBox])
    if(displayBox) {
        return null
    }
    return (
        
      <div className="box">
            <div className="box-inner">
              <div className="box-top">
                <span className="identify-profile">
                  Bonjour,<strong> Mongi</strong>
                </span>
                <button className="close-box" onClick={handleClick}>
                  <img src="assets/img/svg/984127-avatar-male-man-person-profile-user.png" />
                  <i className="icon-dots-vertical " />
                </button>
              </div>
              <div className="change-compte-pro">
                <i className="fal fa-repeat-alt" />
                <a href="">
                  Passer au compte professionnel
                </a>
              </div>
              <div className="profile-list-setting">
                <div className="profile-list-one-items">
                  <div className="item">
                    <i className="fal fa-user" />
                    <a href="user-foodlist-profile.html">Mon profile</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-utensils-alt" />
                    <a>Mon Journal</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-star" />
                    <a>Mes Besties</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-book-heart" />
                    <a> Mes sauvegardes</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-box-heart" />
                    <a> Mes commandes</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-utensils" />
                    <a> Mes menus</a>
                  </div>
                </div>
                <div className="profile-list-two-items">
                  <div className="item">
                    <i className="fal fa-history" />
                    <a>Historique des visites</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-calendar-alt" />
                    <a>Événement</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-id-badge" />
                    <a> Programme Ambassadeur </a>
                  </div>
                  <div className="item">
                    <i className="fal fa-stars" />
                    <a> Programme Micro-Influencer </a>
                  </div>
                </div>
                <div className="profile-list-three-items">
                  <div className="item">
                    <i className="fal fa-comment-alt-exclamation" />
                    <a href="gestion-de-residus.html">Gestion de résidus</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-cookie-bite" />
                    <a href="eat-with-stranger.html">Manger avec un étranger </a>
                  </div>
                </div>
                <div className="profile-list-three-items">
                  <div className="item">
                    <i className="fal fa-users" />
                    <a>Amis à proximité</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-user-plus" />
                    <a>Trouver un ami </a>
                  </div>
                  <div className="item">
                    <i className="fal fa-address-card" />
                    <a>Référez un ami</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-envelope" />
                    <a>Messages </a>
                  </div>
                  <div className="item">
                    <i className="fal fa-circle" />
                    <a>stories </a>
                  </div>
                </div>
                <div className="profile-list-three-items">
                  <div className="item">
                    <i className="fal fa-phone" />
                    <a>Customer service</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-cog" />
                    <a>Settings</a>
                  </div>
                  <div className="item">
                    <i className="fal fa-sign-out-alt" />
                    <a>Logout</a>
                  </div>
                </div>
              </div>
              <div className="box-bottom">
                <div className="header">
                  <i className="fal fa-utensils-alt" />
                  <span>Ajouter un Resto</span>
                </div>
                <div className="bottom-content">
                  <div className="left-side">
                    <i className="fal fa-image" />
                  </div>
                  <div className="right-side">
                    <input type="text" placeholder="Nom du resto" />
                    <i className="fal fa-long-arrow-right" />
                    <div className="line"> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        
        
        
    )
}

Box.propTypes = {

}

export default Box

