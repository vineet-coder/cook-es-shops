import { Link } from "react-router-dom";
import { LowerHeaderMenu } from "../home/LowerHeaderMenu";
import { useRoute } from "../providers/RouteContext";

export const SubHeader = () => {
  const { setRoute } = useRoute();
  return (
    <>
      <div className="sub-header">
        <div className="header-middle">
          <div className="header-middle-content">
            {/* <div className="header-image-div">
              <img
                src="./images/header-cake.png"
                alt="headerImg"
                className="header-img"
              />
            </div> */}
            <div className="header-content">
              <h1 className="header-heading">
                We prove our taste every time!!{" "}
              </h1>
              <small className="header-discription">
                We are company dedicated to the preparation of cookies ,
                providing our customers with a product fresh and fresh from the
                oven.{" "}
              </small>
              <Link to="/menus" className="header-button-dv link-sub-header">
                <button
                  className="btn from-top"
                  // onClick={() => setRoute("MENU")}
                >
                  DISCOVER MENU{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="header-lower">
          <LowerHeaderMenu />
        </div>
      </div>
    </>
  );
};
