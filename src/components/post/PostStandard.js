import React , {useState} from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile } from "@material-ui/core";
import PostModal from "./PostModal";

function PostStandard(props) {
  const { post, user } = props;
  const {content} = post
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="card post-card">
      <div className="post-card-header">
        <div className="post-card-photo" />
        {/* <img src={post.content} /> */}

        <GridList cellHeight={160} cols={3}>
          {content.map((el) => (
            <GridListTile key={el.postId} onClick={handleOpen}>
              <img style={{cursor : 'pointer'}} button src={el} onClick={handleOpen} />
              <PostModal open={open} />
            </GridListTile>
            
          ))}
        </GridList>
      </div>
      <div className="post-card-body">
        <div className="user-who-post-wrapper">
          <div className="user-who-post">
            <div className="user-who-post-info">
              <div className="user-who-post-info-avatar">
                <img src={post.handler.profileImage} />
              </div>
              <div className="user-who-post-info-info">
                <span className="user-username">{post.handler.name}</span>
                <div className="user-about">
                  <i className="fal fa-map-marker-alt" aria-hidden="true" />
                  <span>{post.location}</span>
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
          <div className="post-card-body-description">{post.description}</div>
        </div>
      </div>
      <div className="divider" />
      <div className="post-card-footer">
        <div className="post-card-social-info">
          <div className="post-card-likes">
            <i className="icon-heart" />
            <span className="likes-number">{post.likesNumber}</span>
          </div>
          <div className="post-card-comments">
            <i className="icon-comment" />
            <span className="comments-number">{post.commentsNumber}</span>
            <span className="comments-show-more">Afficher commentaires</span>
          </div>
          <div className="post-card-comment-button">
            <i className="icon-send"> </i>
          </div>
        </div>
        <div className="post-card-comment">
          <div className="post-card-comment-avatar">
            <img src={user.profileImage} />
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
  );
}

PostStandard.propTypes = {};

export default PostStandard;
