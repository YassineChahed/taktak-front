import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Slider from "infinite-react-carousel";
import { UiContext } from "../../context/UiContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "70%",
    heigh: "1OO%",
    border: "2px solid #000",
    backgroundColor:'rgba(0,0,0,0.5)',
    
    //  display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    width: "auto",
    textAlign: "center",
  },
}));

function PostModal(props) {
  const { openModalPost, setOpenModalPost } = useContext(UiContext);
  const { contentInPostModal, setContentInPostModal } = useContext(UiContext);
  const { indexOfClickedElement, setIndexOfClickedElement } = useContext(
    UiContext
  );
  const { handleClosePostModal } = useContext(UiContext);
  const classes = useStyles();

  const settings = {
    rows: 1,
    slidesPerRow: 1,
    initialSlide: indexOfClickedElement,
    margin: "30%",
  };

  const tab = contentInPostModal.map((el) => (
    <div className={classes.image}>
      <img src={el} />
    </div>
  ));
  // const handleClose = () => {
  //   setOpenModalPost(!openModalPost)
  //   console.log(openModalPost)
  // };
  return (
    <Modal
      style={{ zIndex: "99999999999999999999" }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModalPost}
      onClose={handleClosePostModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModalPost}>
        <div className={classes.paper}>
          {/* <h2 id="transition-modal-title">Transition modal</h2> */}
          {/* <p id="transition-modal-description">react-transition-group animates me.</p> */}

          <Slider
            style={{ width: "70%" }}
            w
            id="transition-modal-description"
            {...settings}
          >
            {tab}
          </Slider>
        </div>

        {/* <Slider {...settings}  style={{height: '50%', width:'50%'}} >
          <div style={{height: '50%'}}>
          <img src={props.data[props.index]}/>
          </div>
         
         </Slider> */}
      </Fade>
    </Modal>
  );
}

PostModal.propTypes = {};

export default PostModal;
