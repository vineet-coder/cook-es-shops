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

export const Home = () => {
  const { dispatch } = useCart();
  useEffect(() => {
    (async function () {
      // setIsLoader(true);
      try {
        const cakeResponse = await axios.get(`/api/cakes`);
        const cartResponse = await axios.get(`cartproducts`);
        const wishlistResponse = await axios.get(`wishlistproducts`);

        dispatch({
          type: "INITIALIZE_DATA",
          payload1: cakeResponse.data,
          payload2: cartResponse.data,
          payload3: wishlistResponse.data,

          category: "cake",
        });
        // setIsLoader(false);
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
        {/* <div className="home-content1">
          <Carousel />
        </div> */}
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
              <h5>WELCOME</h5>
              <h2>About uor bakery</h2>
              <p>Our bakery is falana dhikana</p>
              <button className="btn">GET DISCRIPTION</button>
            </div>
          </div>
        </div>
        <div className="home-content2">
          <div className="hot-seling-recipes">
            <div className="hot-seling-recipes-content">
              <h6 className="under-line">EXPLORE</h6>
              <h1>Hot selling recipes</h1>
              <small>Our bakery is falana dhikana</small>
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
              <h2>Our menu</h2>
              <p>Our bakery is falana dhikana</p>
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
