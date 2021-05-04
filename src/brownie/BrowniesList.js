import { BrownieMenu } from "./BrownieMenu";
import { useCart } from "../providers/CartContext";
import { RiNavigationLine } from "react-icons/ri";
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

export const BrowniesList = () => {
  const { dispatch, isLoader, setIsLoader, isAddLoading } = useCart();

  const openRightNav = () => {
    document.getElementById("right-nav-id").style.width = "300px";
  };

  useEffect(() => {
    (async function () {
      setIsLoader(true);
      try {
        const cakeResponse = await axios.get(
          `https://cook-es-shops.herokuapp.com/product/brownies`
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

          category: "brownie",
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
        {isLoader ? <Loader /> : <BrownieMenu />}
      </div>
      <Footer />
    </>
  );
};
