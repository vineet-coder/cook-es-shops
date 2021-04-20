import { Link } from "react-router-dom";
import { useCart } from "../providers/CartContext";
import { useRoute } from "../providers/RouteContext";

export const CupCakeMenu = () => {
  const { finalState } = useCart();

  return (
    <div className="product-list">
      {finalState.Data.cupcake.map((item) => (
        <CupCakeMenuCard item={item} />
      ))}
    </div>
  );
};

const CupCakeMenuCard = ({ item }) => {
  const { setRoute, setProduct } = useRoute();
  const { dispatch } = useCart();

  const goToProductPage = (item) => {
    setRoute("PRODUCT");
    // setProduct([item]);
    dispatch({
      type: "GO_TO_PRODUCT_PAGE",

      payload: item,
    });
  };
  return (
    <div className="product-menu-card ">
      <Link to="/products" className="product-menu-img-div link">
        <img
          src={item.image[0]}
          alt="img"
          className="product-menu-img"
          onClick={() => goToProductPage(item)}
        />
      </Link>
      <div className="product-menu-card-content">
        <div className="product-menu-card-price">
          <h2 className="menu-card-price">
            {item.price}/- Rs.
            <label className="discount">({item.discount}% OFF)</label>{" "}
          </h2>

          <p>{item.name} </p>
          <p>Cooking Status: {item.ready}</p>
        </div>
        <div className="card-btn-div">
          {item.cart ? (
            <button className="btn-cart">Added to Cart</button>
          ) : (
            <button
              className="btn-cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
            >
              Add to Cart
            </button>
          )}

          {item.wishlist ? (
            <button className="btn-wishlist">Added to Wishlist</button>
          ) : (
            <button
              className="btn-wishlist"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_WISHLIST",

                  payload: item,
                })
              }
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
