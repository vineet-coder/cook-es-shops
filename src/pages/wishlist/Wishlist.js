import { useCart } from "../../providers/cartContext/CartContext";
import { WishlistCard } from "./WishlistCard";
import { Header } from "../../components/header/Header";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { Footer } from "../../components/footer/Footer";
import axios from "axios";
import { useEffect } from "react";
import { Loader } from "../../components/loader/Loader";
import { AddProductLoader } from "../../components/addProductLoader/AddProductLoader";
import { ApiService } from "../../utils/ApiServices";
import { useAuth } from "../../providers/AuthProvider";

export const Wishlist = () => {
  const { state, dispatch, setIsLoader, isLoader, isAddLoading } = useCart();
  const { token } = useAuth();

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cartResponse = await ApiService("get", "cartproducts", {
          headers: { authorization: token },
        });

        console.log(cartResponse);

        const wishlistResponse = await ApiService("get", "wishlistproducts", {
          headers: { authorization: token },
        });

        setIsLoader(false);

        dispatch({
          type: "INITIALIZE_DATA",
          category: "cake",

          payload: {
            // data: cakeResponse,
            cartProducts: cartResponse.result[0]?.products,
            wishlistProducts: wishlistResponse.result[0]?.products,
          },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {isAddLoading && <AddProductLoader />}

      <ToggleHeader />
      <ToggleSideNav />
      <Header />

      {isLoader ? (
        <Loader />
      ) : state.wishlistListItem.length === 0 ? (
        <div className="empty-wishlist-card">
          {" "}
          <h1 className="empty-wishlist-heading">
            {" "}
            You haven't add anythimg in the wishlist yet...{" "}
          </h1>
        </div>
      ) : (
        <div className="background-img-div">
          <div className="product-list">
            {state.wishlistListItem.map((item) => (
              <WishlistCard key={item._id} item={item.productid} />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
