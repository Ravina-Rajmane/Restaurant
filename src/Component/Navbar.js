import React ,{useRef} from "react";
import Logo from "../Assets/IMAGES/logo.png";

const Navbar = () => {
  const searchref=useRef();
  const searchHandler=()=>{
    searchref.current.classList.toggle("active");
  }

 
  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#product">product</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
          </nav>
          <div className="icons">
            <div className="fas fa-search" onClick={()=>searchHandler()}></div>
            <div className="fas fa-shopping-cart"></div>

            <div className="fas fa-bars" id="menu-btn"></div>
          </div>
          <div className="search-form" ref={searchref}>
          <input type ="search" placeholder="search here..."id="search-box"></input>
          <lable htmlFor="search-box" className="fas fa-search"></lable>
          </div>
        
      
      </header>
    </div>
  );
};

export default Navbar;
