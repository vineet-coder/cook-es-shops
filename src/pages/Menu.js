import { useRoute } from "../providers/RouteContext";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Menu = () => {
  const { setRoute } = useRoute();

  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />

      <Header />
      <div className="sub-header">
        <div className="header-middle">
          <div className="header-middle-content">
            <div className="header-content">
              <h1 className="header-heading">
                We prove our taste every time!!{" "}
              </h1>
              <small className="header-discription">
                We are company dedicated to the preparation of cookies ,
                providing our customers with a product fresh and fresh from the
                oven.{" "}
              </small>
              <div className="header-button-dv"></div>
            </div>
            <div className="header-image-div">
              <img
                src="./images/header-cake.png"
                alt="headerImg"
                className="header-img"
              />
            </div>
          </div>
        </div>
        <div className="header-lower"></div>
      </div>

      <div className="background-img-div menu-background">
        <div className="menu-heading-div">
          <h1>MENU</h1>
        </div>
        <div className="menu">
          <div className="menu-card" onClick={() => setRoute("CAKE")}>
            <img src="./menu/cake.jpg" alt="img" className="menu-img" />
          </div>
          <div className="menu-card" onClick={() => setRoute("COOKIE")}>
            <img src="./menu/cookie.jpg" alt="img" className="menu-img" />
          </div>
          <div className="menu-card" onClick={() => setRoute("CUPCAKE")}>
            <img src="./menu/cupcake.jpg" alt="img" className="menu-img" />
          </div>
          <div className="menu-card" onClick={() => setRoute("BROWNIE")}>
            <img src="./menu/brownie.jpg" alt="img" className="menu-img" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
