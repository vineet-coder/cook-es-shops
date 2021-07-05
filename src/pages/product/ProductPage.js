import { Header } from "../../components/header/Header";
import { ToggleSideNav } from "../../components/toggleSideNav/ToggleSideNav";
import { ToggleHeader } from "../../components/toggleHeader/ToggleHeader";
import { Footer } from "../../components/footer/Footer";
import { useCart } from "../../providers/cartContext/CartContext";
import { ProductCard } from "./ProductCard";
import { useParams } from "react-router";
import { useEffect } from "react";
import { ApiService } from "../../utils/ApiServices";
import { AddProductLoader } from "../../components/addProductLoader/AddProductLoader";
import { useAuth } from "../../providers/AuthProvider";
import { InformationalModal } from "../../components/informationalModal/InformationalModal";
import Interceptor from "../../middlewares/interseptor";
export const ProductPage = () => {
  const { state, dispatch, isAddLoading } = useCart();
  const { isAxiosFullfil } = useAuth();

  let { productId } = useParams();

  useEffect(() => {
    (async function () {
      try {
        const res = await ApiService("get", `product/${productId}`);

        dispatch({
          type: "GO_TO_PRODUCT_PAGE",
          payload: res.item,
        });
      } catch (error) {
        console.log(error, "axios errror");
      }
    })();
  }, [productId, dispatch]);

  return (
    <>
      <Interceptor />
      {isAxiosFullfil && (
        <InformationalModal info={"You Haven't Logged In!!"} />
      )}

      {isAddLoading && <AddProductLoader />}
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
