import { useNavigate } from "react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CustomBreadcrumb from "@/shared/components/breadcrumb";
import { appRoutes } from "../../routes/app-routes";

export function Confirm() {
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
      <div className="flex flex-col justify-between w-full gap-12 pt-12">
        <div className="flex flex-col rounded-xl gap-6 text-center items-center justify-center">
          <div className="relative">
            <div className="w-12 h-12 rounded-[100%] bg-primary absolute top-6 right-6">
              <span className="text-background text-2xl absolute z-10 top-2 right-3.5">
              ✔
              </span>
            </div>
            <div className="w-18 h-18 rounded-[100%] bg-primary/30 absolute top-3 right-3"></div>
            <div className="w-24 h-24 rounded-[100%] bg-secondary"></div>
          </div>
          <h2 className="text-2xl font-medium text-foreground/70">
            Confirmation ordered Successfully
          </h2>
        </div>
        <div className="flex justify-center">
          <Button
            className="px-20 py-6 bg-primary hover:bg-red-600 text-background text-lg "
            onClick={() => navigate(appRoutes.home)}
          >
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
}
