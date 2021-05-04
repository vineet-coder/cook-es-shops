import { useCart } from "../providers/CartContext";
import { CakeMenuCard } from "./CakeMenuCard";

export const CakeMenu = () => {
  const { finalState } = useCart();
  return (
    <div className="product-list">
      {finalState.Data.cake.map((item) => (
        <CakeMenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};
