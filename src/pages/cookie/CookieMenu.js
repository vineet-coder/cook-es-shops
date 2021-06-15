import { useCart } from "../../providers/cartContext/CartContext";
import { CookieMenuCard } from "./CookieMenuCard";

export const CookieMenu = () => {
  const { finalState } = useCart();

  return (
    <div className="product-list">
      {finalState.Data.cookie?.map((item) => (
        <CookieMenuCard key={item._id} item={item} />
      ))}
    </div>
  );
};
