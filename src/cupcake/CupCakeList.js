import { CupCakeMenu } from "./CupCakeMenu";
import { RiNavigationLine } from "react-icons/ri";
import { useCart } from "../providers/CartContext";
import { ToggleHeader } from "../components/ToggleHeader";
import { Header } from "../components/Header";
import { SubHeader } from "../components/SubHeader";
import { Footer } from "../components/Footer";
import { ToggleSideNav } from "../components/ToggleSideNav";
import axios from "axios";
import { useEffect } from "react";
import { Loader } from "../components/Loader";
import { FilterNav } from "../components/FilterNav";
import { AddProductLoder } from "../components/AddProductLoder";

export const CupCakeList = () => {
  const { dispatch, isLoader, setIsLoader, isAddLoading } = useCart();

  const openRightNav = () => {
    document.getElementById("right-nav-id").style.width = "300px";
  };

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cupcakeResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/product/cupcakes`
        );
        const cartResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/cartproducts`
        );
        const wishlistResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/wishlistproducts`
        );

        dispatch({
          type: "INITIALIZE_DATA",
          payload1: cupcakeResponse.data,
          payload2: cartResponse.data,
          payload3: wishlistResponse.data,

          category: "cupcake",
        });
        setIsLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {isAddLoading && <AddProductLoder />}

      <ToggleHeader />
      <ToggleSideNav />

      <Header />
      <SubHeader />

      <button className="filter-nav-button" onClick={() => openRightNav()}>
        <RiNavigationLine />
      </button>
      <FilterNav />

      <div className="background-img-div">
        {isLoader ? <Loader /> : <CupCakeMenu />}
      </div>
      <Footer />
    </>
  );
};
