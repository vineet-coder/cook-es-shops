import { useCart } from "../providers/CartContext";
import { WishlistCard } from "./WishlistCard";
import { Header } from "../components/Header";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";
import axios from "axios";
import { useEffect } from "react";
import { Loader } from "../components/Loader";

export const Wishlist = () => {
  const { state, dispatch, setIsLoader, isLoader } = useCart();

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

  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />
      <Header />

      {isLoader ? (
        <Loader />
      ) : state.wishlistListItem.length === 0 ? (
        <div className="empty-wishlist-card">
          {" "}
          <h1 className="empty-wishlist-heading"> You haven't add anythimg in the wishlist yet... </h1>
        </div>
      ) : (
        <div className="background-img-div">
          <div className="product-list">
            {state.wishlistListItem.map((item) => (
              <WishlistCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
