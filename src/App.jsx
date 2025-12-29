import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router";
import { GeneralRoutes } from "./routes/general-routes";
import { RestaurantRoutes } from "./routes/restaurant-routes";
import useAuthStore from "@/store/authStore";
import useCartStore from "@/store/cartStore";
import useUserStore from "@/store/userStore";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "@/utils/ScrollToTop"; 

function App() {
  const token = useAuthStore((state) => state.token);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const fetchProfile = useUserStore(state => state.fetchProfile);
  useEffect(() => {
    if (token) {
      fetchCart();
      fetchProfile();
    }
  }, [token, fetchCart,fetchProfile]);

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
