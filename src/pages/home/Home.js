import { HomeMenu } from "./HomeMenuCard";
import { HotRecipeMenu } from "./HotRecipeCard";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { SubHeader } from "../../components/subHeader/SubHeader";
import { Header } from "../../components/header/Header";
import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { Footer } from "../../components/footer/Footer";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import axios from "axios";
import { useEffect } from "react";
import { useCart } from "../../providers/cartContext/CartContext";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";

export const Home = () => {
  const { dispatch } = useCart();
  const { token } = useAuth();
  useEffect(() => {
    (async function () {
      try {
        const cartResponse = await ApiService("get", "cartproducts", {
          headers: { authorization: token },
        });

        console.log(cartResponse);

        const wishlistResponse = await ApiService("get", "wishlistproducts", {
          headers: { authorization: token },
        });

        console.log(wishlistResponse);

        dispatch({
          type: "INITIALIZE_DATA",

          payload: {
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
              <p className="home-content-description">
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
          <div className="hot-selling-recipes">
            <div className="hot-selling-recipes-content">
              <h6 className="under-line">EXPLORE</h6>
              <h2 className="home-content-heading">Hot Selling Recipes</h2>
            </div>
            <div className="hot-selling-recipes-card-list">
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
