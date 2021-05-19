import { useCart } from "../../providers/CartContext";
import axios from "axios";
import { Link } from "react-router-dom";

export const WishlistCard = ({ item }) => {
  const { dispatch, setIsAddLoading } = useCart();

  const goToProductPage = (item) => {
    dispatch({
      type: "GO_TO_PRODUCT_PAGE_FROM_WISHLIST",

      payload: item,
    });
  };
  const addTocart = async (item) => {
    setIsAddLoading(true);

    try {
      await axios.post("https://cook-es-shops.herokuapp.com/cartproducts", {
        id: item.id._id,
        qnt: 1,
      });
      const response = await axios.get(
        "https://cook-es-shops.herokuapp.com/cartproducts"
      );
      const cartList = response.data;
      await axios.delete(
        "https://cook-es-shops.herokuapp.com/wishlistproducts",
        {
          data: { wishlistProductId: item._id, productId: item.id._id },
        }
      );

      dispatch({
        type: "MOVE_TO_CART_FROM_WISHLIST",
        payload1: cartList,
        payload2: item,
      });
      setIsAddLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishist = async (item) => {
    setIsAddLoading(true);

    try {
      await axios.delete(
        "https://cook-es-shops.herokuapp.com/wishlistproducts",
        {
          data: { wishlistProductId: item._id, productId: item.id._id },
        }
      );

      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
      setIsAddLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="product-menu-card">
      <Link to="/products" className="product-menu-img-div">
        <img
          src={item.id.image[0]}
          alt="img"
          className="product-menu-img"
          onClick={() => goToProductPage(item.id)}
        />
      </Link>
      <div className="product-menu-card-content">
        <div className="product-menu-card-price">
          <h2>{item.id.price}/- Rs. </h2>
          <p>{item.id.name} </p>
        </div>
        <div className="card-btn-div">
          {item.id.cart ? (
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
              onClick={() => addTocart(item)}
            >
              Move to cart
            </button>
          )}
          <button
            className="btn-wishlist"
            onClick={() => removeFromWishist(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
