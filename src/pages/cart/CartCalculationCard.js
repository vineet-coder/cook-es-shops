// import axios from "axios";
import React from "react";
import { useCart } from "../../providers/cartContext/CartContext";

export const CartCalculationCard = () => {
  const { state } = useCart();
  const priceArr = state.cartListItem.map(
    (item) => item.quantity * item.productid.price
  );

  const priceSum = (total, price) => total + price;
  const totalAmount = priceArr.reduce(priceSum, 0);
  // function loadScript(src) {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // }

  // async function displayRazorpay() {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );
  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }

  //   const result = await axios.post("http://localhost:8000/payment/orders", {
  //     amount: totalAmount,
  //   });

  //   console.log(result);

  //   if (!result) {
  //     alert("Server error. Are you online?");
  //     return;
  //   }

  //   const { amount, id: order_id, currency } = result.data;

  //   const options = {
  //     key: "rzp_test_6w2huadIEAyIDK", // Enter the Key ID generated from the Dashboard
  //     amount: amount.toString(),
  //     currency: currency,
  //     name: "Soumya Corp.",
  //     description: "Test Transaction",
  //     // image: { logo },
  //     order_id: order_id,
  //     handler: async function (response) {
  //       const data = {
  //         orderCreationId: order_id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpaySignature: response.razorpay_signature,
  //       };

  //       const result = await axios.post(
  //         "http://localhost:5000/payment/success",
  //         data
  //       );

  //       alert(result.data.msg);
  //     },
  //     prefill: {
  //       name: "Soumya Dey",
  //       email: "SoumyaDey@example.com",
  //       contact: "9999999999",
  //     },
  //     notes: {
  //       address: "Soumya Dey Corporate Office",
  //     },
  //     theme: {
  //       color: "#61dafb",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // }

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

      {/* <button className="btn-order-place" onClick={displayRazorpay}>
        Place Order
      </button> */}
    </div>
  );
};
