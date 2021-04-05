import { CakeData } from "../data/Cakes";
import { AiOutlineHeart } from "react-icons/ai";
import { useRoute } from "../providers/RouteContext";
import { useCart } from "../providers/CartContext";

export const WishlistCard = ({ item }) => {
  const { setRoute, setProduct } = useRoute();
  const { dispatch } = useCart();

  const goToProductPage = (item) => {
    setRoute("PRODUCT");
    // setProduct([item]);

    dispatch({
      type: "GO_TO_PRODUCT_PAGE_FROM_WISHLIST",

      payload: item,
    });
  };

  return (
    <div className="product-menu-card">
      <div className="product-menu-img-div">
        <img
          src={item.image[0]}
          alt="img"
          className="product-menu-img"
          onClick={() => goToProductPage(item)}
        />
      </div>
      <div className="product-menu-card-content">
        <div className="product-menu-card-price">
          <h2>{item.price}/- Rs. </h2>
          <p>{item.name} </p>
        </div>
        <div className="card-btn-div">
          {item.cart ? (
            <button className="btn-cart">Added to Cart</button>
          ) : (
            <button
              className="btn-cart"
              onClick={() =>
                dispatch({
                  type: "MOVE_TO_CART_FROM_WISHLIST",
                  payload: item,
                })
              }
            >
              Move to cart
            </button>
          )}
          <button
            className="btn-wishlist"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
