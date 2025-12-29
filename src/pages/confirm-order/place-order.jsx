import { useNavigate } from "react-router";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/shared/components/breadcrumb";
import { appRoutes } from "../../routes/app-routes";
import {Loader} from "@/shared/components/loader";
import { toast } from 'react-toastify';

import useCartStore from "@/store/cartStore";
import useUserStore from "@/store/userStore";

export function PlaceOrder() {
  const navigate = useNavigate();
  const { items, user, cartLoading, userLoading, cartError, fetchCart, fetchProfile } = {
 items: useCartStore((state) => state.items),
    user: useUserStore((state) => state.user),
    cartLoading: useCartStore((state) => state.loading),
    userLoading: useUserStore((state) => state.loading),
    cartError: useCartStore((state) => state.error),
    fetchCart: useCartStore((state) => state.fetchCart),
    fetchProfile: useUserStore((state) => state.fetchProfile),
  };
  const clearCartAction = useCartStore((state) => state.clearCart);

  const grandTotal = items.reduce((total, item) => {
    const itemPrice = item.product?.price || 0;
    return total + (itemPrice * item.quantity);
  }, 0);
    const restaurantIdFromCart = items[0]?.product?.restaurant_admin_id;
  const backToRestaurantLink = restaurantIdFromCart
    ? `/restaurant/${restaurantIdFromCart}`
    : "/";
  useEffect(() => {
    if (items.length === 0 && !cartLoading) {
      fetchCart();
    }
    if (!user && !userLoading) {
      fetchProfile();
    }
  }, [items, user, cartLoading, userLoading, fetchCart, fetchProfile]);
   if (cartError) {
    return <div className="text-center py-28 text-primary">{cartError}</div>;
  }
  
  if (cartLoading || userLoading || items.length === 0 || !user) {
    return (
      <div className="text-center py-34 flex flex-col items-center justify-center gap-6">
        Loading Order Details...
        <div>
          <Loader />
        </div>
      </div>
    );
  }
 const handleConfirmOrder = async () => {
    await clearCartAction();
 toast.success('Order Confirmed! Thank you for your purchase.');
    navigate(appRoutes.confirmOrder);
  };
  
  return (
    <section className="bg-background lg:px-26 px-8 py-28 ">
      <div className="flex justify-center">
        <CustomBreadcrumb
          items={[
            { label: "Home", href: backToRestaurantLink },
            { label: "Cart", href: appRoutes.cart },
            { label: "Checkout", href: appRoutes.checkout },
            { label: "Place order", href: appRoutes.placeOrder },
            { label: "Confirm Order", href: appRoutes.confirmOrder },
          ]}
        />
      </div>
      <div className="flex flex-col justify-between w-full gap-16 pt-12">
        <div className="flex flex-col rounded-xl gap-6 text-center items-center justify-center">
          <h2 className="text-2xl text-foreground/70">Your Order is Ready</h2>

          <div className="flex flex-col text-start space-y-3 md:max-w-[45%] w-full">
            <h3 className="text-primary mb-6">Order Summary</h3>
            <div className="flex gap-26 ">
                <span>Order Code</span>
                <div className="text-start">
                <span>55110022336644 - 55998811</span>
                </div>
            </div>
            <div className="border-b border-border"></div>
             <div className="flex gap-28 ">
                <span>Total Price</span>
                <div className="text-start">
                <span className="text-primary">{grandTotal.toFixed(2)} $</span>
                </div>
            </div>
            <div className="border-b border-border"></div>

             <div className="flex gap-35 ">
                <span>Name</span>
                <span>{user.name}</span>
            </div>
            <div className="border-b border-border"></div>
             
             <div className="flex gap-34">
                <span>Phone</span>
                <span>{user.phone}</span>
            </div>
            <div className="border-b border-border"></div>
             
             <div className="flex gap-18 ">
                <span className="text-nowrap">Delivery address</span>
                <span className="text-md text-wrap">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</span>
            </div>
            <div className="border-b border-border"></div>
          </div>
        </div>
        <div className="flex justify-center">
            <Button
          className="px-20 py-6 bg-primary hover:bg-red-600 text-background text-lg"
          onClick={handleConfirmOrder} 
          disabled={cartLoading}
        >
          {cartLoading ? 'Processing...' : 'Confirm'}
        </Button>
    
        </div>
      </div>
    </section>
  );
}
