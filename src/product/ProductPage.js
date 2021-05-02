import { ProductMenu } from "./ProductMenu";
import { Header } from "../components/Header";
import { ToggleSideNav } from "../components/ToggleSideNav";
import { ToggleHeader } from "../components/ToggleHeader";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useCart } from "../providers/CartContext";
import { ProductCard } from "./ProductCard";

export const ProductPage = () => {
  const { productId } = useParams();
  console.log(productId);
  const { dispatch, state } = useCart();
  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const res = await axios.get(
  //         `https://cook-es-shops.herokuapp.com/product/${productId}`
  //       );
  //       console.log(res);
  //       dispatch({
  //         type: "GO_TO_PRODUCT_PAGE",
  //         payload: res.data,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  return (
    <>
      <ToggleHeader />
      <ToggleSideNav />
      <Header />

      <div className="background-img-div">
        {state.productPage.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
      <Footer />
    </>
  );
};
