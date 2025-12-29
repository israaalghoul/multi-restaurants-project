import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router";
import { GeneralRoutes } from "./routes/general-routes";
import { RestaurantRoutes } from "./routes/restaurant-routes";
import useAuthStore from "@/store/authStore";
import useCartStore from "@/store/cartStore";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/utils/ScrollToTop"; 

function App() {
  const token = useAuthStore((state) => state.token);
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    if (token) {
      fetchCart();
    }
  }, [token, fetchCart]);

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <GeneralRoutes />
        <RestaurantRoutes />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
