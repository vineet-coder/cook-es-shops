import "./App.css";
import { CakeList } from "./cake/CakeList";
import { CookiesList } from "./cookie/CookiesList";
import { CupCakeList } from "./cupcake/CupCakeList";
import { Home } from "./home/Home";
import { BrowniesList } from "./brownie/BrowniesList";
import { ProductPage } from "./product/ProductPage";
import { Cart } from "./cart/Cart";
import { Wishlist } from "./wishlist/Wishlist";
import { Menu } from "./menu/Menu";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cakes" element={<CakeList />} />
      <Route path="/cupcakes" element={<CupCakeList />} />
      <Route path="/brownies" element={<BrowniesList />} />
      <Route path="/cookie" element={<CookiesList />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/menus" element={<Menu />} />
    </Routes>
  );
}
