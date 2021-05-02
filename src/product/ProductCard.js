import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useCart } from "../providers/CartContext";

export const ProductCard = ({ item }) => {
  const { dispatch } = useCart();
  // console.log(item);

  // const addToCart = async () => {
  //   const res = await axios.get("/product/rams");
  //   console.log(res);
  // };
  console.log(item);

  const addToCart = async (_id) => {
    try {
      const { data } = await axios.post(
        "https://cook-es-shops.herokuapp.com/cartproducts/products",
        {
          id: _id,
          qnt: 1,
        }
      );
      console.log(data);

      const response = await axios.get(
        "https://cook-es-shops.herokuapp.com/cartproducts"
      );
      console.log(response.data);

      dispatch({
        type: "ADD_TO_CART_FROM_PRODUCTPAGE",
        payload1: data,
        payload2: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishlist = async (_id) => {
    try {
      const { data } = await axios.post(
        "https://cook-es-shops.herokuapp.com/wishlistproducts/products",
        {
          id: _id,
        }
      );
      console.log(data);

      const response = await axios.get(
        "https://cook-es-shops.herokuapp.com/wishlistproducts"
      );
      console.log(response.data);

      dispatch({
        type: "ADD_TO_WISHLIST_FROM_PRODUCTPAGE",
        payload1: data,
        payload2: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product">
      <div className="product-sub-div">
        <div className="product-img-div">
          <div className="product-btn-div">
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
          <img src={item.image[0]} alt="img" className="product-img1" />
          <img src={item.image[1]} alt="img" className="product-img2" />
        </div>
        <div className="product-content">
          <div className="product-price">
            <div className="product-price-main">
              <h4>{item.name} </h4>

              <h1>{item.price}/- Rs. </h1>
            </div>
            <div className="product-price-discount">
              <h4>{item.name} </h4>

              <h1>{item.price}/- Rs. </h1>
            </div>
          </div>
          <div className="product-description">
            <div className="product-details">
              <h2>Details:</h2>
              {item.Description.Details.map((item) => (
                <li>{item}</li>
              ))}
            </div>
            <div className="product-instrections">
              <h2>Details:</h2>
              {item.Description.Instructions.map((item) => (
                <li>{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
