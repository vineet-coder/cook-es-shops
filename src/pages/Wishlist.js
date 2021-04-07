import { useCart } from "../providers/CartContext";
import { WishlistCard } from "../cards/WishlistCard";
import { Header } from "../components/Header";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";

export const Wishlist = () => {
  const { state } = useCart();

  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />
      <Header />

      <div className="background-img-div">
        <div className="product-list">
          {state.wishlistListItem.map((item) => (
            <WishlistCard item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
