import { useCart } from "../providers/CartContext";

export const Product = () => {
  const { state } = useCart();

  return (
    <div className="product">
      {state.productPage.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};

const ProductCard = ({ item }) => {
  const { dispatch } = useCart();
  console.log(item);
  return (
    <div className="product-sub-div">
      <div className="product-img-div">
        <div className="product-btn-div">
          {item.cart ? (
            <button className="btn-cart">Added to Cart</button>
          ) : (
            <button
              className="btn-cart"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item,
                })
              }
            >
              Add to Cart
            </button>
          )}

          {item.wishlist ? (
            <button className="btn-wishlist">Added to Wishlist</button>
          ) : (
            <button
              className="btn-wishlist"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_WISHLIST",

                  payload: item,
                })
              }
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
  );
};
