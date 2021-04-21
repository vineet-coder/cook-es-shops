import { Link } from "react-router-dom";
import { headerCardObj } from "../data/HeaderCardObj";
import { useRoute } from "../providers/RouteContext";

export const LowerHeaderMenu = () => {
  return (
    <div className="lower-header-menu">
      {headerCardObj.map((item) => (
        <HeaderMenuCard item={item} />
      ))}
    </div>
  );
};

const HeaderMenuCard = ({ item }) => {
  const { setRoute } = useRoute();

  return (
    <Link to={`/${item.route}`} className="header-menu-card link">
      <div
        className="header-menu-card-div"
        // onClick={() => setRoute(`${item.name}`)}
      >
        <div className="header-menu-card-img-div">
          {/* <img src={item.image} alt="img" className="header-menu-img" /> */}
          {item.image}
        </div>
        <div className="header-menu-card-title-div">
          {" "}
          <h4>{item.name} </h4>
        </div>
      </div>
    </Link>
  );
};
