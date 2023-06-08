import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Analytics from "./pages/Dashboard/Analytics";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import FormElements from "./pages/Form/FormElements";
import FormLayout from "./pages/Form/FormLayout";
import Tables from "./pages/Tables";
import Settings from "./pages/Settings";
import Chart from "./pages/Chart";
import Alerts from "./pages/UiElements/Alerts";
import Buttons from "./pages/UiElements/Buttons";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import AddProduct from "./pages/products/AddProduct";
import ProductList from "./pages/products/ProductList";
import OrdersList from "./pages/orders/OrdersList";
import OrderDetails from "./pages/orders/OrderDetails";
import ProductDetails from "./pages/products/ProductDetails";
import UserList from "./pages/users/UserList";

const App = () => {
  const [loading, setLoading] = useState(true);

  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 0);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 0);
  }, []);

  return (
    !loading && (
      <>
        <Routes>
          <Route exact path="/" element={<Analytics />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="/products/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/users/" element={<UserList />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="/forms/form-elements" element={<FormElements />} />
          <Route path="/forms/form-layout" element={<FormLayout />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/ui/alerts" element={<Alerts />} />
          <Route path="/ui/buttons" element={<Buttons />} /> */}
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
        </Routes>
      </>
    )
  );
};

export default App;
