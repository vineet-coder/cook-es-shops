import { Product } from "./ProductCard";
import { Header } from "../components/Header";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useCart } from "../providers/CartContext";

export const ProductPage = () => {
  const { productId } = useParams();
  const { dispatch, state } = useCart();

 

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
