import React, { useState, useEffect } from "react";



const UiContext = React.createContext();

function UiContextProvider({ children }) {
  const [openModalPost, setOpenModalPost] = useState(false);

  const [contentInPostModal, setContentInPostModal ] = useState( ["https://picsum.photos/200/300","https://picsum.photos/100/300","assets/img/image1.png"])
  const [indexOfClickedElement, setIndexOfClickedElement ] = useState(0)

  const handleOpenPostModal = (e,content) => {
    setOpenModalPost(true)
    setContentInPostModal(content)
    let a = content.indexOf(e.target.src)
    setIndexOfClickedElement(a)
    // console.log('modal open',{openModalPost})
   
    console.log("ffffffffffffffffffffffffffffffffff")
    console.log(content.indexOf(e.target.src))
    console.log(content)
   
  };
  const handleClosePostModal = () => {
    setOpenModalPost(false)
    console.log('modal close',{openModalPost})
  };

  const [signUpPageNumber, setSignUpPageNumber] = useState(1)
  const [signUpForm, setSignUpForm] = useState({firstName : "",lastName:"",email:"",phone:"",password:"",verifiedPassword:""})
  const [loginForm, setLoginForm] = useState({email:"",password:"",remeberMe:false,keepMe:false})
  return (
    <UiContext.Provider
      value={{
        openModalPost,
        setOpenModalPost,
        contentInPostModal,
        setContentInPostModal,
        indexOfClickedElement,
        setIndexOfClickedElement,
        handleOpenPostModal,
        handleClosePostModal,
        signUpPageNumber,
        setSignUpPageNumber,
        signUpForm,
        setSignUpForm,
        loginForm,
        setLoginForm,



        



       
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export { UiContextProvider, UiContext };
