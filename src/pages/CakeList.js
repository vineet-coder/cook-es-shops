import { LowerHeaderMenu } from "../cards/HeaderCard";
import { useRoute } from "../providers/RouteContext";
import { FiAlignJustify, FiInstagram } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { CakeMenu } from "../menu/CakeMenu";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import { RiNavigationLine } from "react-icons/ri";

import { useCart } from "../providers/CartContext";
import { BiDish } from "react-icons/bi";
import { CupCakeList } from "./CupCakeList";
import { CupCakeMenu } from "../menu/CupCakeMenu";
import { BrownieMenu } from "../menu/BrownieMenu";
import { CookieMenu } from "../menu/CookieMenu";

export const CakeList = () => {
  const { setRoute } = useRoute();
  const { state, dispatch, finalState } = useCart();

  const openSideNav = () => {
    document.getElementById("side-nav-id").style.width = "90%";
  };

  const closeSideNav = () => {
    document.getElementById("side-nav-id").style.width = "0";
  };

  const openRightNav = () => {
    document.getElementById("right-nav-id").style.width = "30%";
  };

  const closeRightNav = () => {
    document.getElementById("right-nav-id").style.width = "0";
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

      <div className="sub-header">
        <div className="header-middle">
          <div className="header-middle-content">
            <div className="header-content">
              <h1 className="header-heading">
                We prove our taste every time!!{" "}
              </h1>
              <small className="header-discription">
                We are company dedicated to the preparation of cookies ,
                providing our customers with a product fresh and fresh from the
                oven.{" "}
              </small>
              <div className="header-button-dv">
                <button className="btn from-top">DISCOVER MENU </button>
              </div>
            </div>
            <div className="header-image-div">
              <img
                src="./images/header-cake.png"
                alt="headerImg"
                className="header-img"
              />
            </div>
          </div>
        </div>
        <div className="header-lower">
          <LowerHeaderMenu />
        </div>
      </div>
      <button className="filter-nav-button" onClick={() => openRightNav()}>
        {/* <HiOutlinePlusCircle size="3rem" /> */}
        {/* <p>F</p>
        <p>I</p>
        <p>T</p>
        <p>E</p>
        <p>R</p>

        <p>S</p> */}
        <RiNavigationLine />
      </button>
      <div className="right-nav" id="right-nav-id">
        <div className="close-icon-div-right-nav">
          <BsX onClick={() => closeRightNav()} size="3rem" />
        </div>
        <div className="filter-div">
          <fieldset className="fieldset">
            <legend>Sort By</legend>
            <div>
              <input
                type="radio"
                onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
                checked={state.isHighToLow}
              />{" "}
              Price- High to Low
            </div>
            <div>
              <input
                type="radio"
                onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
                checked={state.isLowToHigh}
              />{" "}
              Price- Low to High
            </div>
          </fieldset>
        </div>
        <div className="filter-div">
          <fieldset className="fieldset">
            <legend>Sort By</legend>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "READY" })}
                checked={finalState.Ready}
              />{" "}
              Fast pickup's
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "DISCOUNT" })}
                checked={finalState.Discount}
              />{" "}
              Discount
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "POPULOR" })}
                checked={finalState.Populor}
              />{" "}
              Popular cakes
            </div>
          </fieldset>
        </div>
      </div>

      <div className="background-img-div">
        {/* <div className="product-list"></div> */}
        <CakeMenu />
        {/* {route === "CAKE" && <CakeMenu />} */}
        {/* {route === "CUPCAKE" && <CupCakeMenu />}
        {route === "BROWNIE" && <BrownieMenu />}
        {route === "COOKIE" && <CookieMenu />} */}
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
