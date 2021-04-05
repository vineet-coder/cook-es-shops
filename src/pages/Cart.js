import { CakeMenu } from "../menu/CakeMenu";
import { useCart } from "../providers/CartContext";
import { LowerHeaderMenu } from "../cards/HeaderCard";
import { useRoute } from "../providers/RouteContext";
import { FiAlignJustify, FiInstagram } from "react-icons/fi";
import { BsX } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { SiGmail } from "react-icons/si";

export const Cart = () => {
  const { state } = useCart();
  const { setRoute } = useRoute();

  const openSideNav = () => {
    document.getElementById("side-nav-id").style.width = "90%";
  };

  const closeSideNav = () => {
    document.getElementById("side-nav-id").style.width = "0";
  };

  const priceArr = state.cartListItem.map((item) => item.quantity * item.price);

  const priceSum = (total, price) => total + price;
  const totalAmount = priceArr.reduce(priceSum, 0);
  console.log(totalAmount);

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

      <div className="background-img-div cart-background">
        <div className="cart-div">
          <div className="cart-heading">
            <h2>My Cart</h2>
            <h2>Items in cart: {state.cartListItem.length}</h2>
          </div>
          {state.cartListItem.map((item) => (
            <CartCard item={item} />
          ))}
        </div>
        <div className="cart-calcuation">
          <div className="order-heading">
            <h2>Your orders are here</h2>
          </div>
          <div className="ordered-item">
            <div className="order-item-list">
              <ol className="ordered-list">
                {state.cartListItem.map((item) => (
                  <li className="ordered-list-item">{item.name}</li>
                ))}
              </ol>
              {state.cartListItem.length > 0 ? (
                <p>Delaviry Change:</p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="order-price">
              <ul>
                {state.cartListItem.map((item) => (
                  <li className="ordered-list-item-price">
                    <small> {item.quantity} </small> X {item.price} /- Rs.
                  </li>
                ))}
              </ul>
              {state.cartListItem.length > 0 ? <p>0 /- Rs.</p> : <p></p>}
            </div>
          </div>
          <div className="order-total">
            <div className="total-heading">
              <h3>Your total amount is:</h3>
            </div>
            <div className="total-amount">{totalAmount} /- Rs.</div>
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
const CartCard = ({ item }) => {
  const { setRoute, setProduct } = useRoute();
  const { dispatch } = useCart();
  const goToProductPage = (item) => {
    setRoute("PRODUCT");
    // setProduct([item]);

    dispatch({
      type: "GO_TO_PRODUCT_PAGE_FROM_CART",

      payload: item,
    });
  };

  return (
    <>
      <div className="cart-card">
        <div className="cart-card-sub-div">
          <div className="cart-card-img-div">
            <img
              src={item.image[0]}
              alt="img"
              className="cart-card-img"
              onClick={() => goToProductPage(item)}
            />
          </div>
          <div className="cart-card-content-div">
            <h2>{item.price}/- Rs. </h2>
            <p>{item.name} </p>
            <button
              className="btn-cart remove-btn"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove from cart{" "}
            </button>
          </div>
          <div className="cart-card-btn-div">
            <div className="cart-card-btn-sub-div">
              <button
                className="btn-cart add-minus-btn"
                onClick={() => dispatch({ type: "INCREMENT", payload: item })}
              >
                +
              </button>
              {item.quantity}
              {item.quantity === 1 ? (
                <button
                  className="btn-cart add-minus-btn"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  }
                >
                  <MdDeleteForever />
                </button>
              ) : (
                <button
                  className="btn-cart add-minus-btn"
                  onClick={() => dispatch({ type: "DECREMENT", payload: item })}
                >
                  -
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
