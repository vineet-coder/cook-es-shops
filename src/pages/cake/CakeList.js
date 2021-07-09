import { CakeMenu } from "./CakeMenu";
import { RiNavigationLine } from "react-icons/ri";
import { useCart } from "../../providers/cartContext/CartContext";
import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { Header } from "../../components/header/Header";
import { SubHeader } from "../../components/subHeader/SubHeader";
import { Footer } from "../../components/footer/Footer";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import { useEffect } from "react";
import { Loader } from "../../components/loader/Loader";
import { FilterNav } from "../../components/filterNav/FilterNav";
import { AddProductLoader } from "../../components/addProductLoader/AddProductLoader";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";
import { InformationalModal } from "../../components/informationalModal/InformationalModal";
import Interceptor from "../../middlewares/interseptor";

export const CakeList = () => {
  const { dispatch, setIsLoader, isLoader, isAddLoading } = useCart();
  const { token, isAxiosFullfil } = useAuth();

  const openRightNav = () => {
    document.getElementById("right-nav-id").style.width = "300px";
  };

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cakeResponse = await ApiService("get", "product/cakes");

        await dispatch({
          type: "INITIALIZE_DATA",
          category: "cake",

          payload: {
            data: cakeResponse,
          },
        });
        setIsLoader(false);

        const cartResponse = await ApiService("get", "cartproducts", {
          headers: { authorization: token },
        });

        const wishlistResponse = await ApiService("get", "wishlistproducts", {
          headers: { authorization: token },
        });

        dispatch({
          type: "INITIALIZE_DATA",
          category: "cake",

          payload: {
            data: cakeResponse,
            cartProducts: cartResponse.result[0]?.products,
            wishlistProducts: wishlistResponse.result[0]?.products,
          },
        });
      } catch (error) {
        console.log(error);
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
      <SubHeader />

      <button className="filter-nav-button" onClick={() => openRightNav()}>
        <RiNavigationLine />
      </button>
      <FilterNav />

      <div className="background-img-div">
        {isLoader ? <Loader /> : <CakeMenu />}
      </div>
      <Footer />
    </>
  );
};
