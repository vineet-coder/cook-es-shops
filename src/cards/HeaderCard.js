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
    <div className="header-menu-card">
      <div
        className="header-menu-card-div"
        onClick={() => setRoute(`${item.name}`)}
      >
        <div>
          {/* <img src={item.image} alt="img" className="header-menu-img" /> */}
          {item.image}
        </div>
        <div>
          {" "}
          <h4>{item.name} </h4>
        </div>
      </div>
    </div>
  );
};
