import { Header } from "../components/Header";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";
import { useCart } from "../providers/CartContext";
import { ProductCard } from "./ProductCard";

export const ProductPage = () => {
  const { state } = useCart();

  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />
      <Header />

      <div className="background-img-div">
        {state.productPage.map((item) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>
      <Footer />
    </>
  );
};
