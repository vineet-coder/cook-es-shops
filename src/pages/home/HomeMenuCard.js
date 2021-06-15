import { Link } from "react-router-dom";
import { homeMenuCardData } from "../../data/HomeMenuCardData";

export const HomeMenu = () => {
  return (
    <div className="home-menu">
      {homeMenuCardData.map((item) => (
        <HomeMenuCard key={item.name} item={item} />
      ))}
    </div>
  );
};

const HomeMenuCard = ({ item }) => {
  return (
    <Link to="/menus" className="home-menu-card link">
      <div className="home-menu-card-img-div">
        <img src={item.image[0]} alt="img" className="home-menu-card-img" />
      </div>
      <div className="home-menu-card-content">
        <h3 className="home-menu-card-product-name">{item.name}</h3>
        <h4>{item.price}/- Rs.</h4>
      </div>
    </Link>
  );
};
