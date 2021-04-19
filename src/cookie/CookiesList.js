import { CookieMenu } from "./CookieMenu";
import { BsX } from "react-icons/bs";
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

export const CookiesList = () => {
  const { state, dispatch, finalState, isLoader, setIsLoader } = useCart();

  const openRightNav = () => {
    document.getElementById("right-nav-id").style.width = "30%";
  };

  const closeRightNav = () => {
    document.getElementById("right-nav-id").style.width = "0";
  };

  useEffect(() => {
    (async function () {
      try {
        const cookieResponse = await axios.get(`/api/cookies`);

        dispatch({
          type: "INITIALIZE_COOKIE_DATA",
          payload: cookieResponse.data,
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
      <SubHeader />

      <button className="filter-nav-button" onClick={() => openRightNav()}>
        <RiNavigationLine />
      </button>
      <div className="right-nav" id="right-nav-id">
        <div className="close-icon-div-right-nav">
          <BsX onClick={() => closeRightNav()} size="3rem" />
        </div>
        <div className="filter-div">
          <fieldset className="fieldset">
            <legend>Sort By</legend>
            <div>
              <input
                type="radio"
                onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
                checked={state.isHighToLow}
              />{" "}
              Price- High to Low
            </div>
            <div>
              <input
                type="radio"
                onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
                checked={state.isLowToHigh}
              />{" "}
              Price- Low to High
            </div>
          </fieldset>
        </div>
        <div className="filter-div">
          <fieldset className="fieldset">
            <legend>Sort By</legend>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "READY" })}
                checked={finalState.Ready}
              />{" "}
              Fast pickup's
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "DISCOUNT" })}
                checked={finalState.Discount}
              />{" "}
              Discount
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch({ type: "POPULOR" })}
                checked={finalState.Populor}
              />{" "}
              Popular cakes
            </div>
          </fieldset>
        </div>
      </div>

      <div className="background-img-div">
        {/* <div className="product-list"></div> */}
        {isLoader ? <Loader /> : <CookieMenu />}
      </div>
      <Footer />
    </>
  );
};
