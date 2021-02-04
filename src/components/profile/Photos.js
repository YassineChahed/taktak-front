import React,{useState} from "react";
import PropTypes from "prop-types";
import PhotoCard from "./photosUtils/PhotoCard";

function Photos(props) {
  const [panel, setPanel] = useState(1)
 const photoNumber=23
 const photos = [
    {
      src: "https://picsum.photos/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/500/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/100/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/500/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/222/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/400/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/333/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/444/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/555/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/900/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
    {
      src: "https://picsum.photos/800/500",
      likes: 232,
      postHandler: "amir bouker",comments:23 , createdAt:"2323232323"
    },
  ];
  let imagesLink = photos.map(el => el.src)
  let tab = photos.map((el) => <PhotoCard photo={el} photos={imagesLink} />);
 

  //photos filter pour filtrer les photo de vous ou vos photos oubien new query???


  return (
    <div className="tabs-panel is-active" id="panel1">
      <div className="tab-one collapsed">
        {/* <div className="tab-one-header">
            <span>Postez photos ou Déposer directement ici !</span>
            <i className="icon-camera" />
          </div> */}
        <div className="tab-one-body">
          <div id="dropzone">
            <span className="here">Uploader vos photos</span>
          </div>
          <button className="upload-now">Postez maintenant</button>
        </div>
      </div>
      <div className="my-photos">
        <div className="my-photos-top">
          <span className={(panel===1)?"photos-top-ele active":"photos-top-ele"} onClick={()=>setPanel(1)}>
            <i className="icon-media" />
            Afficher tout
          </span>
          <span className={(panel===2)?"photos-top-ele active":"photos-top-ele"}  onClick={()=>setPanel(2)}>
            <i className="icon-camera" />
            Vos photos
          </span>
          <span className={(panel===3)?"photos-top-ele active":"photos-top-ele"}  onClick={()=>setPanel(3)}>
            <i className="icon-user-profile" />
            Photos de vous
          </span>
        </div>
        <div className="my-photos-bottom">
          <div className="my-photos-bottom-header">
            <span className="photos">
              Photos <strong>{photoNumber}</strong>{" "}
            </span>
            <span>
              Les plus récents
              <i className="fal fa-sort-down" />
            </span>
          </div>
          <div className="my-photos-photos">
            <div className="add-photos-border">
              <div className="add-photos">
                <i className="fas fa-plus" />
              </div>
            </div>

            {tab}
          </div>
        </div>
      </div>
    </div>
  );
}

Photos.propTypes = {};

export default Photos;
