import React from "react";
import { useCart } from "../../providers/cartContext/CartContext";

export const CartCalculationCard = () => {
  const { state } = useCart();
  const priceArr = state.cartListItem.map(
    (item) => item.quantity * item.productid.price
  );

  const priceSum = (total, price) => total + price;
  const totalAmount = priceArr.reduce(priceSum, 0);
  return (
    <div className="cart-calculation">
      <div className="order-heading">
        <h2>Your orders are here</h2>
      </div>
      <div className="ordered-item">
        <div className="order-item-list">
          <ol className="ordered-list">
            {state.cartListItem.map((item) => (
              <li key={item._id} className="ordered-list-item">
                {item.productid.name}
              </li>
            ))}
          </ol>
          {state.cartListItem.length > 0 ? (
            <p className="delivery-charges">delivery Charge:</p>
          ) : (
            <p></p>
          )}
        </div>
        <div className="order-price">
          <ul>
            {state.cartListItem.map((item) => (
              <li key={item._id} className="ordered-list-item-price">
                <small> {item.quantity} </small> X {item.productid.price} /- Rs.
              </li>
            ))}
          </ul>
          {state.cartListItem.length > 0 ? (
            <p className="delivery-charges">0 /- Rs.</p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <div className="order-total">
        <div className="total-heading">
          <h3>Your total amount is:</h3>
        </div>
        <div className="total-amount">{totalAmount} /- Rs.</div>
      </div>
    </div>
  );
};
