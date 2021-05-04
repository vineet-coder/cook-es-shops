import { BsX } from "react-icons/bs";
import { Link } from "react-router-dom";

export const ToggleSideNav = () => {
  const closeSideNav = () => {
    document.getElementById("side-nav-id").style.width = "0";
  };
  return (
    <>
      <div className="side-nav" id="side-nav-id">
        <div className="close-icon-div">
          <BsX onClick={() => closeSideNav()} />
        </div>
        <div>
          <ul className="side-nav-list">
            <Link
              onClick={() => closeSideNav()}
              to="/"
              className="link side-nav-list-item"
            >
              <h4>Home</h4>
            </Link>
            <Link
              onClick={() => closeSideNav()}
              to="/menus"
              className=" link side-nav-list-item"
            >
              <h4>Menu</h4>
            </Link>
            <Link
              onClick={() => closeSideNav()}
              to="/cart"
              className="link side-nav-list-item"
            >
              <h4>Cart</h4>
            </Link>
            <Link
              onClick={() => closeSideNav()}
              to="/wishlist"
              className="link side-nav-list-item"
            >
              <h4>Wishlist</h4>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};
