import { useCart } from "../../providers/CartContext";
import { CupCakeMenuCard } from "./CupCakeMenuCard";

export const CupCakeMenu = () => {
  const { finalState } = useCart();

  return (
    <div className="product-list">
      {finalState.Data.cupcake.map((item) => (
        <CupCakeMenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};
