import "./App.css";
import { CakeList } from "./cake/CakeList";
import { CookiesList } from "./cookie/CookiesList";
import { CupCakeList } from "./cupcake/CupCakeList";
import { Home } from "./home/Home";
import { BrowniesList } from "./brownie/BrowniesList";
import { useRoute } from "./providers/RouteContext";
import { ProductPage } from "./product/ProductPage";
import { Cart } from "./cart/Cart";
import { Wishlist } from "./wishlist/Wishlist";
import { Menu } from "./menu/Menu";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const { route } = useRoute();
  return (
    // <div className="App">
    //   {route === "home" && <Home />}
    //   {route === "CAKE" && <CakeList />}
    //   {route === "CUPCAKE" && <CupCakeList />}
    //   {route === "BROWNIE" && <BrowniesList />}
    //   {route === "COOKIE" && <CookiesList />}
    //   {route === "PRODUCT" && <ProductPage />}
    //   {route === "CART" && <Cart />}
    //   {route === "WISHLIST" && <Wishlist />}
    //   {route === "MENU" && <Menu />}
    // </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CAkE" element={<CakeList />} />
      <Route path="/CUPCAKE" element={<CupCakeList />} />
      <Route path="/BROWNIE" element={<BrowniesList />} />
      <Route path="/COOKIE" element={<CookiesList />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/menus" element={<Menu />} />
    </Routes>
  );
}
