import React, { useRef } from "react";
import Logo from "../Assets/IMAGES/logo.png";
import { cart } from "../data";
const Navbar = () => {
  const searchref = useRef();
  const cartref = useRef();
  const navbarRef= useRef();

  const searchHandler = () => {
    searchref.current.classList.toggle("active");
    cartref.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };
const cartHandler=()=>{
 cartref.current.classList.toggle("active");
 searchref.current.classList.remove("active");
 navbarRef.current.classList.remove("active");
}
const navbarHandler=()=>{
  navbarRef.current.classList.toggle("active");
  cartref.current.classList.remove("active");
  searchref.current.classList.remove("active");
}

  return (
    <div>
      <header className="header">
        <a href="#" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#product">product</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <div className="fas fa-search" onClick={() => searchHandler()}></div>
          <div className="fas fa-shopping-cart" onClick={()=>cartHandler()}></div>

          <div className="fas fa-bars" id="menu-btn" onClick={()=>navbarHandler()}></div>
        </div>
        <div className="search-form" ref={searchref}>
          <input
            type="search"
            placeholder="search here..."
            id="search-box"
          ></input>
          <lable htmlFor="search-box" className="fas fa-search"></lable>
        </div>
        <div className="cart-items-container " ref={cartref}>
          {cart.map((item, index) => (
            <div className="cart-item">
              <span className="fas fa-times"></span>
              <img src={item.img}/>
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$13.99</div>
              </div>
            </div>
          ))}
          <a className="btn" href="#">checkout now</a>

        </div>
      </header>
    </div>
  );
};

export default Navbar;
