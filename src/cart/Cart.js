import { useRoute } from "../providers/RouteContext";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { ToggleHeader } from "../components/ToggleHeader";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useCart } from "../providers/CartContext";
import axios from "axios";
import { useEffect } from "react";

export const Cart = () => {
  const { state, setIsLoader, dispatch } = useCart();

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cakeResponse = await axios.get(`/product/cakes`);
        const cartResponse = await axios.get(`cartproducts`);
        const wishlistResponse = await axios.get(`wishlistproducts`);

        dispatch({
          type: "INITIALIZE_DATA",
          payload1: cakeResponse.data,
          payload2: cartResponse.data,
          payload3: wishlistResponse.data,

          category: "cake",
        });
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const priceArr = state.cartListItem.map(
    (item) => item.id.quantity * item.id.price
  );

  const priceSum = (total, price) => total + price;
  const totalAmount = priceArr.reduce(priceSum, 0);
  // console.log(totalAmount);

  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />

      <Header />

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
                  <li className="ordered-list-item">{item.id.name}</li>
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
                    <small> {item.id.quantity} </small> X {item.id.price} /- Rs.
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
      <Footer />
    </>
  );
};
const CartCard = ({ item }) => {
  const { setRoute } = useRoute();
  const { dispatch } = useCart();
  const goToProductPage = (item) => {
    setRoute("PRODUCT");
    // setProduct([item]);

    dispatch({
      type: "GO_TO_PRODUCT_PAGE_FROM_CART",

      payload: item,
    });
  };

  const removeFromCart = async (item) => {
    console.log(item);
    try {
      await axios.delete("/cartproducts", {
        data: { cartProductId: item._id, productId: item.id._id },
      });

      // const response = await axios.get("/cartproduts");

      dispatch({ type: "REMOVE_FROM_CART", payload: item });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="cart-card">
        <div className="cart-card-sub-div">
          <div className="cart-card-img-div">
            <img
              src={item.id.image[0]}
              alt="img"
              className="cart-card-img"
              onClick={() => goToProductPage(item)}
            />
          </div>
          <div className="cart-card-content-div">
            <h2>{item.id.price}/- Rs. </h2>
            <p>{item.id.name} </p>
            <button
              className="btn-cart remove-btn"
              // onClick={() =>
              //   dispatch({ type: "REMOVE_FROM_CART", payload: item })
              // }
              onClick={() => removeFromCart(item)}
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
                  // onClick={() =>
                  //   dispatch({ type: "REMOVE_FROM_CART", payload: item })
                  // }

                  onClick={() => removeFromCart(item)}
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
