import { useCart } from "../../providers/cartContext/CartContext";
import { BrownieMenuCard } from "./BrownieMenuCard";

export const BrownieMenu = () => {
  const { finalState } = useCart();

  return (
    <div className="product-list">
      {finalState.Data.brownie?.map((item) => (
        <BrownieMenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};
