import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import { useRoute } from "../providers/RouteContext";
import { useCart } from "../providers/CartContext";

export const Header = () => {
  const { setRoute } = useRoute();
  const { state } = useCart();
  return (
    <>
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
    </>
  );
};
