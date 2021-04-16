import { Product } from "./ProductCard";
import { Header } from "../components/Header";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";

export const ProductPage = () => {
  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />
      <Header />

      <div className="background-img-div">
        <Product />
      </div>
      <Footer />
    </>
  );
};
