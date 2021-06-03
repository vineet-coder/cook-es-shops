import { useCart } from "../../providers/cartContext/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
  removeFromWishlist,
} from "../../utils/menu.utils";
import { useAuth } from "../../providers/AuthProvider";

export const WishlistCard = ({ item }) => {
  const { dispatch, setIsAddLoading, finalState } = useCart();
  const { token } = useAuth();
  const goToProductPage = (item) => {
    dispatch({
      type: "GO_TO_PRODUCT_PAGE_FROM_WISHLIST",

      payload: item,
    });
  };

  let isProductInCart = finalState.cartListItem
    ?.map((item) => item.productid._id)
    .includes(item._id);

  console.log({ isProductInCart });

  console.log(item);
  return (
    <div className="product-menu-card">
      <Link to="/products" className="product-menu-img-div">
        <img
          src={item.image[0]}
          alt="img"
          className="product-menu-img"
          onClick={() => goToProductPage(item.id)}
        />
      </Link>
      <div className="product-menu-card-content">
        <div className="product-menu-card-price">
          <h2>{item.price}/- Rs. </h2>
          <p>{item.name} </p>
        </div>
        <div className="card-btn-div">
          {isProductInCart ? (
            <button
              className="btn-cart"
              onClick={() => removeFromCart(item._id, token, dispatch)}
            >
              Added to Cart
            </button>
          ) : (
            <button
              className="btn-cart"
              // onClick={() =>
              //   dispatch({
              //     type: "MOVE_TO_CART_FROM_WISHLIST",
              //     payload: item,
              //   })
              // }
              onClick={() =>
                addToCart(item._id, 1, token, dispatch, setIsAddLoading)
              }
            >
              Move to cart
            </button>
          )}
          <button
            className="btn-wishlist"
            onClick={() => removeFromWishlist(item._id, token, dispatch)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
