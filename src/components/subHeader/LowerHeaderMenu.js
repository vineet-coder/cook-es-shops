import { Link } from "react-router-dom";
import { headerCardObj } from "../../data/HeaderCardObj";

export const LowerHeaderMenu = () => {
  return (
    <div className="lower-header-menu">
      {headerCardObj.map((item) => (
        <HeaderMenuCard key={item.name} item={item} />
      ))}
    </div>
  );
};

const HeaderMenuCard = ({ item }) => {
  return (
    <Link to={`/${item.route}`} className="header-menu-card link">
      <div className="header-menu-card-div">
        <div className="header-menu-card-img-div">{item.image}</div>
        <div className="header-menu-card-title-div">
          {" "}
          <h4>{item.name} </h4>
        </div>
      </div>
    </Link>
  );
};
