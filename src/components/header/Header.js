import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { useCart } from "../../providers/cartContext/CartContext";
import { Link } from "react-router-dom";
import { useLogin } from "../../providers/loginProvider/LoginContext";
import { useAuth } from "../../providers/AuthProvider";

export const Header = () => {
  const { state } = useCart();
  const { loginState } = useLogin();
  const { isUserLogin, userName } = useAuth();

  // console.log(loginState);
  // console.log(userName?.split(" ")[0]);
  return (
    <>
      <header className="home-header">
        <div className="header-top">
          <Link to="/" className="header-top-left-element link">
            <img
              src="/./images/company-logo.png"
              alt="img"
              className="header-logo-img"
            />
          </Link>
          <div className="header-list-div">
            <div className="header-list">
              <div className="header-list-item">About</div>
              <Link to="/menus" className="header-list-item link-header">
                Menu
              </Link>
              <div className="header-list-item">Order</div>
              {isUserLogin ? (
                <Link to="/login" className="header-list-item link-header">
                  {userName?.split(" ")[0]}
                </Link>
              ) : (
                <Link to="/login" className="header-list-item link-header">
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="header-top-right-element">
            <Link to="/cart" className="cart link-header">
              cart <FaShoppingCart />{" "}
              {/* {state.cartListItem?.length === 0 ? (
                <></>
              ) : ( */}
              <div className="cart-quantity">{state.cartListItem?.length}</div>
              {/* )} */}
            </Link>
            <Link to="/wishlist" className="wishlist link-header">
              wishlist <AiOutlineHeart />
              {/* {state.wishlistListItem?.length === 0 ? (
                <div></div>
              ) : ( */}
              <div className="wishlist-quantity">
                {state.wishlistListItem?.length}
              </div>
              {/* )} */}
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
