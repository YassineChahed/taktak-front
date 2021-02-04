import React,{useState} from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

function FollowerItem(props) {
   return (  <div className="one-follower">
   <div className="one-follower-inner">
     <div className="user-who-post-info-avatar">
       <img src={props.follower.profileImage} style={{borderRadius: '50%'}} />
     </div>
     <div className="user-who-post-info-info">
       <span className="user-username">{props.follower.userName}</span>
       <div className="user-about">
         <i className="icon-marker" />
         <span> {props.follower.location}</span>
       </div>
     </div>
   </div>
 </div>)
}

function FollowersList(props) {
    const followers = props.followers.sample.map(el =>{return <FollowerItem follower={el}/>})
    const follows = props.follows.sample.map(el =>{return <FollowerItem follower={el}/>})
 let tab=[]
   props.followOrfollwers ? tab=followers:tab=follows
   
    return (
        <div className="followers-list" style={{height: 400 , overflow : "scroll"}} >
            {/* <InfiniteScroll dataLength={1}> */}
            {tab}
            {/* </InfiniteScroll> */}
          
            
        {/* <div className="one-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="your-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="one-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="your-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="one-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="your-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="one-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
        <div className="your-follower">
          <div className="one-follower-inner">
            <div className="user-who-post-info-avatar">
              <img src="assets/img/avatar.png" />
            </div>
            <div className="user-who-post-info-info">
              <span className="user-username">Alex</span>
              <div className="user-about">
                <i className="icon-marker" />
                <span> Marsa, Tunis</span>
              </div>
            </div>
          </div>
        </div>
      
       */}
      
      </div>
    
    )
}

FollowersList.propTypes = {

}

export default FollowersList

