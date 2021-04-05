import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FiAlignJustify, FiInstagram } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { LowerHeaderMenu } from "../cards/HeaderCard";
import { HomeMenu } from "../cards/HomeMenuCard";
import { HotRecipeMenu } from "../cards/HotRecipeCard";
import { useRoute } from "../providers/RouteContext";

import { useCart } from "../providers/CartContext";

import Carousel from "../libraries/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Header } from "../components/Header";

export const Home = () => {
  const { setRoute } = useRoute();
  const { state } = useCart();

  const openSideNav = () => {
    document.getElementById("side-nav-id").style.width = "90%";
  };

  const closeSideNav = () => {
    document.getElementById("side-nav-id").style.width = "0";
  };
  return (
    <>
      <header className="toggle-header">
        <div className="home-icon">home</div>
        <div className="toggle-button-div">
          <FiAlignJustify
            className="toggle-button"
            onClick={() => openSideNav()}
          />
        </div>
      </header>

      <div className="side-nav" id="side-nav-id">
        <div className="close-icon-div">
          <BsX onClick={() => closeSideNav()} />
        </div>
        <div>
          <ul className="side-nav-list">
            <li className="side-nav-list-item">
              <a>Home</a>
            </li>
            <li className="side-nav-list-item">
              <a>Homeddsfdsf</a>
            </li>
            <li className="side-nav-list-item">
              <a>Home</a>
            </li>
          </ul>
        </div>
      </div>
      <header className="home-header">
        <div className="header-top">
          <div
            className="header-top-left-element"
            onClick={() => setRoute("home")}
          >
            <img
              src="./images/company-logo.png"
              alt="img"
              className="header-logo-img"
            />
          </div>
          <div className="header-list-div">
            <div className="header-list">
              <div className="header-list-item">About</div>
              <div
                className="header-list-item"
                onClick={() => setRoute("MENU")}
              >
                Menu
              </div>
              <div className="header-list-item">Order</div>
              <div className="header-list-item">Contact</div>
            </div>
          </div>

          <div className="header-top-right-element">
            <div className="cart" onClick={() => setRoute("CART")}>
              cart <FaShoppingCart />{" "}
              {state.cartListItem.length === 0 ? (
                <div></div>
              ) : (
                <div className="cart-quantity">{state.cartListItem.length}</div>
              )}
            </div>
            <div className="wishlist" onClick={() => setRoute("WISHLIST")}>
              wishlist <AiOutlineHeart />
              {state.wishlistListItem.length === 0 ? (
                <div></div>
              ) : (
                <div className="wishlist-quantity">
                  {state.wishlistListItem.length}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <Header />
      {/* <Carousel /> */}

      <div className="content">
        <div className="home-content1">
          <div className="home-super-content">
            <div className="super-content-img-div">
              <img
                src="./images/cake-piece1.png"
                alt="superContentImg"
                className="super-content-img"
              />
            </div>
            <div className="super-content-content">
              <h5>WELCOME</h5>
              <h2>About uor bakery</h2>
              <p>Our bakery is falana dhikana</p>
              <button className="btn">GET DISCRIPTION</button>
            </div>
          </div>
        </div>
        <div className="home-content2">
          <div className="hot-seling-recipes">
            <div className="hot-seling-recipes-content">
              <h6 className="under-line">EXPLORE</h6>
              <h1>Hot selling recipes</h1>
              <small>Our bakery is falana dhikana</small>
            </div>
            <div className="hot-seling-recipes-card-list">
              <HotRecipeMenu />
            </div>
          </div>
        </div>
        <div className="home-content3">
          <div className="home-menu">
            <div className="home-menu-content">
              <h5>SEE</h5>
              <h2>Our menu</h2>
              <p>Our bakery is falana dhikana</p>
            </div>
            <div className="home-menu-list">
              <HomeMenu />
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-list-item">
            <SiGmail />
          </li>
          <li className="footer-list-item">
            <FiInstagram />
          </li>
          <li className="footer-list-item">
            <AiOutlineTwitter />
          </li>
        </ul>

        <img
          src="./images/susie-ilus-header.png"
          alt="fotterImg"
          className="footer-img"
        />
      </footer>
    </>
  );
};
