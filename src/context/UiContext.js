import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

const UiContext = React.createContext();

function UiContextProvider({ children }) {
  const [openModalPost, setOpenModalPost] = useState(false);

  const [contentInPostModal, setContentInPostModal] = useState([
    "https://picsum.photos/200/300",
    "https://picsum.photos/100/300",
    "assets/img/image1.png",
  ]);
  const [indexOfClickedElement, setIndexOfClickedElement] = useState(0);

  const handleOpenPostModal = (e, content, src) => {
    setOpenModalPost(true);
    setContentInPostModal(content);
    let a = content.indexOf(e.target.src);
    setIndexOfClickedElement(a);
    // console.log('modal open',{openModalPost})

    // console.log("ffffffffffffffffffffffffffffffffff");
    // console.log(content.indexOf(e.target.src));
    // console.log(content);
  };
  const handleClosePostModal = () => {
    setOpenModalPost(false);
    console.log("modal close", { openModalPost });
  };

  const [signUpPageNumber, setSignUpPageNumber] = useState(1);
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    verifiedPassword: "",
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    remeberMe: false,
    keepMe: false,
  });

  const [conversationListOpen, setConversationListOpen] = useState(false);
  const [conversationsLoaded, setConversationsLoaded] = useState([
    { isOpen: false, user: { name: "", profileImage: "" } },
    { isOpen: false, user: { name: "", profileImage: "" } },
    { isOpen: false, user: { name: "", profileImage: "" } },
  ]);
function loadConversations(){
  if((conversationsLoaded[0].isOpen === false)&&(conversationsLoaded[1].isOpen === false)&&(conversationsLoaded[2].isOpen === false)){
    setConversationsLoaded(prev => [{isOpen: true,user: { name: "", profileImage: "" }},prev[1],prev[2]])
    console.log("all false")
    
  }
  else if ((conversationsLoaded[0].isOpen === true)&&(conversationsLoaded[1].isOpen === true)&&(conversationsLoaded[2].isOpen === true)){
    setConversationsLoaded(prev => [{isOpen: true,user: { name: "", profileImage: "" }},prev[1],prev[2]])
   
  }
  else if ((conversationsLoaded[0].isOpen === true)&&(conversationsLoaded[1].isOpen === false)){
    setConversationsLoaded(prev => [prev[0],{isOpen: true,user: { name: "", profileImage: "" }},prev[2]])
    
  }
  else if ((conversationsLoaded[0].isOpen === true)&&(conversationsLoaded[1].isOpen === true)&&(conversationsLoaded[2].isOpen === false)){
    setConversationsLoaded(prev => [prev[0],prev[1],{isOpen: true,user: { name: "", profileImage: "" }}])
   
  }

}

function closeChatBox(index,e){
  const tab =conversationsLoaded
 tab[index]= { isOpen: false, user: { name: "", profileImage: "" } }
  setConversationsLoaded([tab[0],tab[1],tab[2]])
}

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
        conversationListOpen,
        setConversationListOpen,
        conversationsLoaded,
        setConversationsLoaded,
        loadConversations,
        closeChatBox
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export { UiContextProvider, UiContext };
