import React from "react";
import { useCart } from "../../providers/cartContext/CartContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { ApiService } from "../../utils/ApiServices";
import { useAuth } from "../../providers/AuthProvider";
import {
  addToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist,
} from "../../utils/menu.utils";

export const CakeMenuCard = ({ item }) => {
  const { dispatch, setIsAddLoading } = useCart();
  const { finalState } = useCart();
  const { token } = useAuth();

  let isProductInCart = finalState.cartListItem
    ?.map((item) => item.productid?._id)
    .includes(item._id);

  let isProductInWishlist = finalState.wishlistListItem
    ?.map((item) => item.productid?._id)
    .includes(item._id);

  // console.log({ isProductInCart });
  // console.log({ isProductInWishlist });

  // let product_Id = finalState.cartListItem[0]._id;
  // console.log(product_Id);

  const goToProductPage = (item) => {
    dispatch({
      type: "GO_TO_PRODUCT_PAGE",

      payload: item,
    });
  };
  // console.log(finalState.cartListItem);
  // console.log(item);

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

          <h3>{item.name} </h3>
          <p>Cooking Status: {item.ready}</p>
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
      </div>
    </div>
  );
};
