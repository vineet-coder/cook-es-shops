import { useCart } from "../../providers/cartContext/CartContext";
import { CakeMenuCard } from "./CakeMenuCard";

export const CakeMenu = () => {
  const { finalState } = useCart();
  console.log(finalState);

  return (
    <div className="product-list">
      {finalState.Data.cake?.map((item) => (
        <CakeMenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};
