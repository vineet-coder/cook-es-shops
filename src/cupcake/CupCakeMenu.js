import axios from "axios";
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

  const addToCart = async (_id) => {
    try {
      await axios.post("/cartproducts", {
        id: _id,
        qnt: 1,
      });
      const response1 = await axios.get("/cartproducts");
      console.log(response1.data);
      const cartList = response1.data;

      const response2 = await axios.get("product/cupcakes");
      console.log(response2.data);
      const cupcakeList = response2.data;

      dispatch({
        type: "ADD_TO_CART",
        payload1: cartList,
        payload2: cupcakeList,
        category: "cupcake",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (_id) => {
    try {
      await axios.post("/wishlistproducts", {
        id: _id,
      });
      const response1 = await axios.get("/wishlistproducts");
      console.log(response1.data);
      const wishlistList = response1.data;

      const response2 = await axios.get("product/cupcakes");
      console.log(response2.data);
      const cupcakeList = response2.data;

      dispatch({
        type: "ADD_TO_WISHLIST",
        payload1: wishlistList,
        payload2: cupcakeList,
        category: "cupcake",
      });
    } catch (error) {
      console.log(error);
    }
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
              // onClick={() =>
              //   dispatch({
              //     type: "ADD_TO_CART",
              //     payload: item,
              //   })
              // }

              onClick={() => addToCart(item._id)}
            >
              Add to Cart
            </button>
          )}

          {item.wishlist ? (
            <button className="btn-wishlist">Added to Wishlist</button>
          ) : (
            <button
              className="btn-wishlist"
              // onClick={() =>
              //   dispatch({
              //     type: "ADD_TO_WISHLIST",

              //     payload: item,
              //   })
              // }

              onClick={() => addToWishlist(item._id)}
            >
              Add to Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
