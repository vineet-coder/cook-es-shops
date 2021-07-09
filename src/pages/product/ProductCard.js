import { useEffect } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { useCart } from "../../providers/cartContext/CartContext";
import { ApiService } from "../../utils/ApiServices";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../../utils/menu";

export const ProductCard = ({ item }) => {
  const { dispatch, finalState, setIsAddLoading } = useCart();
  const { token } = useAuth();

  useEffect(() => {
    (async function () {
      try {
        const cartResponse = await ApiService("get", "cartproducts", {
          headers: { authorization: token },
        });

        const wishlistResponse = await ApiService("get", "wishlistproducts", {
          headers: { authorization: token },
        });

        dispatch({
          type: "INITIALIZE_DATA",
          category: "cake",

          payload: {
            cartProducts: cartResponse.result[0]?.products,
            wishlistProducts: wishlistResponse.result[0]?.products,
          },
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, [token, dispatch]);

  let isProductInCart = finalState.cartListItem
    ?.map((item) => item.productid?._id)
    .includes(item._id);

  let isProductInWishlist = finalState.wishlistListItem
    ?.map((item) => item.productid?._id)
    .includes(item._id);

  return (
    <div className="product">
      <div className="product-sub-div">
        <div className="product-img-div">
          <div className="product-btn-div">
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
                onClick={() =>
                  addToCart(item._id, 1, token, dispatch, setIsAddLoading)
                }
              >
                Add to Cart
              </button>
            )}

            {isProductInWishlist ? (
              <button
                className="btn-wishlist"
                onClick={() => removeFromWishlist(item._id, token, dispatch)}
              >
                Added to Wishlist
              </button>
            ) : (
              <button
                className="btn-wishlist"
                onClick={() =>
                  addToWishlist(item._id, 1, token, dispatch, setIsAddLoading)
                }
              >
                Add to Wishlist
              </button>
            )}
          </div>
          <img src={`/${item.image[0]}`} alt="img" className="product-img1" />
          <img src={`/${item.image[1]}`} alt="img" className="product-img2" />
        </div>
        <div className="product-content">
          <div className="product-price">
            <div className="product-price-main">
              <h2>{item.name} </h2>

              <h1>{item.price}/- Rs. </h1>

              <h4>
                {item.discount}% OFF<label>(for limited time)</label>
              </h4>
              <h4>Cooking status: {item.ready} </h4>
            </div>
          </div>
          <div className="product-description">
            <div className="product-details">
              <h2>Details:</h2>
              {item.Description.Details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
            <div className="product-instructions">
              <h2>Details:</h2>
              {item.Description.Instructions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
