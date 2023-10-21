import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
const AppContext = React.createContext();

const API = [
  {
    "id": 1,
    "title": "Product A",
    "image": "https://img.freepik.com/free-vector/vector-banner-website-development_107791-3339.jpg?w=1060&t=st=1696999669~exp=1697000269~hmac=525e1b35d0a156c86f24189c7e87a0a4a75a32d8da2160ff1cc7dcc74f23ff63",
    "description": "Product A is a high-quality item with many features."
  },
  {
    "id": 2,
    "title": "Product B",
    "image": "https://img.freepik.com/free-vector/software-development-isometric-landing-page-website-program-coding-cross-platform-algorithm-programming-languages-interface-computer-screen-technology-process-app-creation-3d-banner_107791-4329.jpg?w=996&t=st=1696999061~exp=1696999661~hmac=7d4477771f7e20d41e150148bb7f86631854feffc33844a3cefb8d5921ee2f42",
    "description": "Product B is a durable and affordable option for your needs."
  },
  {
    "id": 3,
    "title": "Service X",
    "image": "https://img.freepik.com/premium-vector/mobile-app-development-background_73903-295.jpg?w=900",
    "description": "Service X offers professional solutions for your business."
  },
  {
    "id": 4,
    "title": "Location Y",
    "image": "https://img.freepik.com/free-photo/html-system-website-concept_23-2150376770.jpg?w=900&t=st=1696999763~exp=1697000363~hmac=4706c3d0d6277c0e0f184931cccc40e32a4789dd87a046b7eb368472f7262b77",
    "description": "Location Y is a beautiful place for your vacation."
  }
]
;

const initialstate = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);


  const updateHomepage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Supriya Technical",
        image: "https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/hero.svg",
      },
    });
  };

  const updateAboutpage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Supriya Technical",
        image: "https://raw.githubusercontent.com/thapatechnical/reactmultipage/b27bff8403d3729dcd652cff79d85c878a3f211a/public/images/about1.svg",
      },
    });
  };

 
  //  to get api data
  // Define the getServices function within the useEffect to access dispatch
    const getServices = async (url) => {
        console.log(url);
      try {
        // const res = await fetch(url);
        // const data = await res.json();
        const data = url;
       
        dispatch({ type: "GET_SERVICES", payload: data });
        console.log(data);
         
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {

    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomepage, updateAboutpage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
