import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";

import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import Home from "./Components/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />}>
            <Route index element={<Home />} />
            <Route
              path="mens"
              element={<ShopCategory banner={men_banner} category="men" />}
            />
            <Route
              path="womens"
              element={<ShopCategory banner={women_banner} category="women" />}
            />
            <Route
              path="kids"
              element={<ShopCategory banner={kid_banner} category="kid" />}
            />
            <Route path="product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<LoginSignup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
