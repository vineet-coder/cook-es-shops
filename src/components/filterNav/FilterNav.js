import React from "react";
import { BsX } from "react-icons/bs";
import { useCart } from "../../providers/cartContext/CartContext";
export const FilterNav = () => {
  const { state, dispatch, finalState } = useCart();

  const closeRightNav = () => {
    document.getElementById("right-nav-id").style.width = "0";
  };
  return (
    <div className="right-nav" id="right-nav-id">
      <div className="close-icon-div-right-nav">
        <BsX onClick={() => closeRightNav()} size="3rem" />
      </div>
      <div className="filter-div">
        <fieldset className="fieldset">
          <legend>Sort By</legend>
          <div>
            <input
              type="radio"
              onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
              checked={state.isHighToLow === true}
              readOnly
            />{" "}
            Price- High to Low
          </div>
          <div>
            <input
              type="radio"
              onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
              checked={state.isLowToHigh === true}
              readOnly
            />{" "}
            Price- Low to High
          </div>
        </fieldset>
      </div>
      <div className="filter-div">
        <fieldset className="fieldset">
          <legend>Sort By</legend>
          <div>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "READY" })}
              checked={finalState.Ready === true}
              readOnly
            />{" "}
            Fast pickup's
          </div>
          <div>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "DISCOUNT" })}
              checked={finalState.Discount === true}
              readOnly
            />{" "}
            Discount
          </div>
          <div>
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "POPULAR" })}
              checked={finalState.popular}
              readOnly
            />{" "}
            Popular cakes
          </div>
        </fieldset>
      </div>
    </div>
  );
};
