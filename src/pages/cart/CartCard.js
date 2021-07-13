import { Link } from "react-router-dom";
import { useCart } from "../../providers/cartContext/CartContext";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart, updateCart } from "../../utils/menu";
import { useAuth } from "../../providers/AuthProvider";

export const CartCard = ({ item, quantity, productObject_Id }) => {
  const { dispatch, setIsAddLoading } = useCart();
  const { token } = useAuth();

  let plusUpdatedQuantity = quantity + 1;
  let minusUpdatedQuantity = quantity - 1;

  return (
    <>
      <div className="cart-card">
        <div className="cart-card-sub-div">
          <Link to={`/products/${item._id}`} className="cart-card-img-div">
            <img src={item.image[0]} alt="img" className="cart-card-img" />
          </Link>
          <div className="cart-card-content-div">
            <h2>{item.price}/- Rs. </h2>
            <p>{item.name} </p>
            <button
              className="btn-cart remove-btn"
              onClick={() =>
                removeFromCart(item._id, token, dispatch, setIsAddLoading)
              }
            >
              Remove from cart{" "}
            </button>
          </div>
          <div className="cart-card-btn-div">
            <div className="cart-card-btn-sub-div">
              <button
                className="btn-cart add-minus-btn"
                onClick={() =>
                  updateCart(
                    productObject_Id,
                    plusUpdatedQuantity,
                    token,
                    dispatch,
                    setIsAddLoading
                  )
                }
              >
                +
              </button>
              {quantity}
              {quantity === 1 ? (
                <button
                  className="btn-cart add-minus-btn"
                  onClick={() =>
                    removeFromCart(item._id, token, dispatch, setIsAddLoading)
                  }
                >
                  <MdDeleteForever />
                </button>
              ) : (
                <button
                  className="btn-cart add-minus-btn"
                  onClick={() =>
                    updateCart(
                      productObject_Id,
                      minusUpdatedQuantity,
                      token,
                      dispatch,
                      setIsAddLoading
                    )
                  }
                >
                  -
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
