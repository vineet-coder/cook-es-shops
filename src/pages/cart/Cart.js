import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import { Header } from "../../components/header/Header";
import { Footer } from "../../components/footer/Footer";
import { useCart } from "../../providers/cartContext/CartContext";
import { useEffect } from "react";
import { CartCard } from "./CartCard";
import { Loader } from "../../components/loader/Loader";
import { AddProductLoader } from "../../components/addProductLoader/AddProductLoader";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";
import { CartCalculationCard } from "./CartCalculationCard";
import { InformationalModal } from "../../components/informationalModal/InformationalModal";
import Interceptor from "../../middlewares/interseptor";

export const Cart = () => {
  const { state, setIsLoader, dispatch, isLoader, isAddLoading } = useCart();
  const { token, isAxiosFullfil } = useAuth();

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cartResponse = await ApiService("get", "cartproducts", {
          headers: { authorization: token },
        });

        const wishlistResponse = await ApiService("get", "wishlistproducts", {
          headers: { authorization: token },
        });

        setIsLoader(false);

        dispatch({
          type: "INITIALIZE_DATA",
          category: "cake",

          payload: {
            cartProducts: cartResponse.result[0]?.products,
            wishlistProducts: wishlistResponse.result[0]?.products,
          },
        });
      } catch (error) {
        console.log(error, "axios error");
      }
    })();
  }, [setIsLoader, token, dispatch]);
  return (
    <>
      <Interceptor />
      {isAxiosFullfil && (
        <InformationalModal info={"You Haven't Logged In!!"} />
      )}
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
              <h2>Items in cart: {state.cartListItem?.length}</h2>
            </div>
            {state.cartListItem?.map((item) => (
              <CartCard
                key={item._id}
                item={item.productid}
                quantity={item.quantity}
                productObject_Id={item._id}
              />
            ))}
          </div>

          <CartCalculationCard />
        </div>
      )}

      <Footer />
    </>
  );
};
