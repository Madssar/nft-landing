import React, { useState, useEffect } from "react";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";
import scrollreveal from "scrollreveal";
import "./sass/index.scss";

export default function App() {

  const[theme, setTheme] = useState("dark");
  const changeTheme = ()=>{
    theme==="dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(()=>{
    const registerAnimations = ()=> {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "88px",
        duration: 2000,
        reset: false
      });
      sr.reveal(
        `nav,.home,free,.clients,.super-rare,.releases,.like,.signup,footer`,
        {interval: 500}
      );
    };
    registerAnimations();
  }, []);

  window.setTimeout(()=>{
    const home = document.getElementsByClassName("home");
    home[0].getElementsByClassName.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform="none";
  },1000);

  return (
    <div className='app-container' data-theme={theme}>
      <ScrollToTop/>
      <Navbar
        changeTheme={changeTheme} currentTheme={theme}
      />
      <Home/>
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer /> 
    </div>
  )
}
