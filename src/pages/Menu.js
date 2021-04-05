import { LowerHeaderMenu } from "../cards/HeaderCard";
import { useRoute } from "../providers/RouteContext";
import { FiAlignJustify } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { CakeMenu } from "../menu/CakeMenu";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "../providers/CartContext";

export const Menu = () => {
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
                <></>
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
              <div className="header-button-dv"></div>
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
        <div className="header-lower"></div>
      </div>

      <div className="background-img-div menu-background">
        <div className="menu-heading-div">
          <h1>MENU</h1>
        </div>
        <div className="menu">
          <div className="menu-card" onClick={() => setRoute("CAKE")}>
            <img src="./menu/cake.jpg" alt="img" className="menu-img" />
          </div>
          <div className="menu-card" onClick={() => setRoute("COOKIE")}>
            <img src="./menu/cookie.jpg" alt="img" className="menu-img" />
          </div>
          <div className="menu-card" onClick={() => setRoute("CUPCAKE")}>
            <img src="./menu/cupcake.jpg" alt="img" className="menu-img" />
          </div>
          <div className="menu-card" onClick={() => setRoute("BROWNIE")}>
            <img src="./menu/brownie.jpg" alt="img" className="menu-img" />
          </div>
        </div>
      </div>
    </>
  );
};
