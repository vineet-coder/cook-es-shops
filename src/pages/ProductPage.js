import { LowerHeaderMenu } from "../cards/HeaderCard";
import { HomeMenu } from "../cards/HomeMenuCard";
import { HotRecipeMenu } from "../cards/HotRecipeCard";
import { useRoute } from "../providers/RouteContext";
import { FiAlignJustify, FiInstagram } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { Product } from "../cards/Product";
import { useCart } from "../providers/CartContext";

export const ProductPage = () => {
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

      <div className="background-img-div">
        <Product />
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
