import { Header } from "../../components/header/Header";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { Footer } from "../../components/footer/Footer";
import { useCart } from "../../providers/cartContext/CartContext";
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
