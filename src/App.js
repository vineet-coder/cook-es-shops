import "./App.css";
import { CakeList } from "./pages/CakeList";
import { CookiesList } from "./pages/CookiesList";
import { CupCakeList } from "./pages/CupCakeList";
import { Home } from "./pages/Home";
import { BrowniesList } from "./pages/BrowniesList";
import { useRoute } from "./providers/RouteContext";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Menu } from "./pages/Menu";

export default function App() {
  const { route } = useRoute();
  return (
    <div className="App">
      {route === "home" && <Home />}
      {route === "CAKE" && <CakeList />}
      {route === "CUPCAKE" && <CupCakeList />}
      {route === "BROWNIE" && <BrowniesList />}
      {route === "COOKIE" && <CookiesList />}
      {route === "PRODUCT" && <ProductPage />}
      {route === "CART" && <Cart />}
      {route === "WISHLIST" && <Wishlist />}
      {route === "MENU" && <Menu />}
    </div>
  );
}
