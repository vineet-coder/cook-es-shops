import { HomeMenu } from "./HomeMenuCard";
import { HotRecipeMenu } from "./HotRecipeCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubHeader } from "../components/SubHeader";
import { Header } from "../components/Header";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";
import { ToggleSideNav } from "../components/ToggleSideNav";
import axios from "axios";
import { useEffect } from "react";
import { useCart } from "../providers/CartContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { dispatch } = useCart();
  useEffect(() => {
    (async function () {
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

      <div className="content">
   
        <div className="home-content1">
          <div className="home-super-content">
            <div className="super-content-img-div">
              <img
                src="./images/cake-piece.png"
                alt="superContentImg"
                className="super-content-img"
              />
            </div>
            <div className="super-content-content">
              <h4>WELCOME</h4>
              <h2 className="home-content-heading">
                Our bakery is known for!!
              </h2>
              <p className="home-content-discription">
                Our classic treats are made daily by in-house bakers, using the
                freshest & finest ingredients. Come visit us for delicious,
                sentimental sweets and a friendly, old-fashioned neighborhood
                experience.
              </p>
              <Link to="/menus" className="header-button-dv link-sub-header">
                <button className="btn">GET MENU</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-content2">
          <div className="hot-seling-recipes">
            <div className="hot-seling-recipes-content">
              <h6 className="under-line">EXPLORE</h6>
              <h2 className="home-content-heading">Hot Selling Recipes</h2>
            </div>
            <div className="hot-seling-recipes-card-list">
              <HotRecipeMenu />
            </div>
          </div>
        </div>
        <div className="home-content3">
          <div className="home-menu">
            <div className="home-menu-content">
              <h5>SEE</h5>
              <h2>Our Menu</h2>
            </div>
            <div className="home-menu-list">
              <HomeMenu />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
