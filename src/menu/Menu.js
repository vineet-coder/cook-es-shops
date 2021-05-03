import { useRoute } from "../providers/RouteContext";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

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
          </div>
        </div>
        <div className="header-lower"></div>
      </div>

      <div className="background-img-div menu-background">
        <div className="menu-heading-div">
          <h1>MENU</h1>
        </div>
        <div className="menu">
          <Link className="menu-card link" to="/cakes">
            <img src="./menu/cake.jpg" alt="img" className="menu-img" />
          </Link>
          <Link className="menu-card link" to="/cookies">
            <img src="./menu/cookie.jpg" alt="img" className="menu-img" />
          </Link>
          <Link className="menu-card link" to="/cupcakes">
            <img src="./menu/cupcake.jpg" alt="img" className="menu-img" />
          </Link>
          <Link className="menu-card link" to="/brownies">
            <img src="./menu/brownie.jpg" alt="img" className="menu-img" />
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
