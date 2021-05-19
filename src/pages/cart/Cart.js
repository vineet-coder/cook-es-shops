import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useCart } from "../../providers/CartContext";
import axios from "axios";
import { useEffect } from "react";
import { CartCard } from "./CartCard";
import { Loader } from "../../components/loader/Loader";
import { AddProductLoader } from "../../components/addProductLoader/AddProductLoader";

export const Cart = () => {
  const { state, setIsLoader, dispatch, isLoader, isAddLoading } = useCart();

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cakeResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/product/cakes`
        );
        const cartResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/cartproducts`
        );
        const wishlistResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/wishlistproducts`
        );

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

  return (
    <>
      {isAddLoading && <AddProductLoader />}

      <ToggleHeader />
      <ToggleSideNav />

      <Header />
      {isLoader ? (
        <Loader />
      ) : (
        <div className="background-img-div cart-background">
          <div className="cart-div">
            <div className="cart-heading">
              <h2>My Cart</h2>
              <h2>Items in cart: {state.cartListItem.length}</h2>
            </div>
            {state.cartListItem.map((item) => (
              <CartCard key={item._id} item={item} />
            ))}
          </div>
          <div className="cart-calculation">
            <div className="order-heading">
              <h2>Your orders are here</h2>
            </div>
            <div className="ordered-item">
              <div className="order-item-list">
                <ol className="ordered-list">
                  {state.cartListItem.map((item) => (
                    <li key={item._id} className="ordered-list-item">
                      {item.id.name}
                    </li>
                  ))}
                </ol>
                {state.cartListItem.length > 0 ? (
                  <p className="delivery-charges">delivery Charge:</p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className="order-price">
                <ul>
                  {state.cartListItem.map((item) => (
                    <li key={item._id} className="ordered-list-item-price">
                      <small> {item.id.quantity} </small> X {item.id.price} /-
                      Rs.
                    </li>
                  ))}
                </ul>
                {state.cartListItem.length > 0 ? (
                  <p className="delivery-charges">0 /- Rs.</p>
                ) : (
                  <p></p>
                )}
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
      )}

      <Footer />
    </>
  );
};
