import { useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/shared/components/breadcrumb";
import { appRoutes } from "../../routes/app-routes";

export function PlaceOrder() {
  const navigate = useNavigate();
  return (
    <section className="bg-background lg:px-26 px-8 py-28 ">
      <div className="flex justify-center">
        <CustomBreadcrumb
          items={[
            { label: "Home", href: appRoutes.home },
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
                <span className="text-primary">540$</span>
                </div>
            </div>
            <div className="border-b border-border"></div>

             <div className="flex gap-35 ">
                <span>Name</span>
                <span>Customer name</span>
            </div>
            <div className="border-b border-border"></div>
             
             <div className="flex gap-34">
                <span>Phone</span>
                <span>+44 526 584 5364</span>
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
          className="px-20 py-6 bg-primary hover:bg-red-600 text-background text-lg "
          onClick={() => navigate(appRoutes.confirmOrder)}
        >
          Confirm
        </Button>
        </div>
      </div>
    </section>
  );
}
