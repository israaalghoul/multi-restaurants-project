import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import saladImg from "@/assets/salad.jpg";
import companyImg1 from "@/assets/company1.png";
import companyImg2 from "@/assets/company2.png";
import companyImg3 from "@/assets/company3.png";
import companyImg4 from "@/assets/company4.png";
import companyImg5 from "@/assets/company5.png";
import { appRoutes } from "../../routes/app-routes";
import { useNavigate } from "react-router";
import CustomBreadcrumb from "@/shared/components/breadcrumb";

export function Cart() {
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 pt-12">
        {/* Left */}
        <div className="w-full lg:w-2/3">
          {/* Cart */}
          <div className="flex p-4 w-full shadow rounded-xl bg-secondary/30 gap-4 flex-wrap">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Button className="w-10 bg-primary text-background text-xl">
                  ✔
                </Button>
              </div>
              <img
                src={saladImg}
                className="w-32 h-32 rounded-xl object-cover"
                alt=""
              />
            </div>
            <div className="md:ml-4 flex flex-col justify-between flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium"> Name</h3>
                {/* Delete */}
                <Trash2 className="cursor-pointer text-primary flex justify-end" />
              </div>
              <p className="text-warning text-sm font-medium flex gap-5">
                20%{" "}
                <span className="text-muted-foreground line-through">360$</span>
              </p>
              <div className="flex justify-between flex-wrap gap-2">
                <p className="text-primary font-medium text-lg">300$</p>
                {/* Quantity */}
                <div className="flex items-end gap-3">
                  <Button className="w-10 border border-border bg-background text-ring text-2xl hover:text-background">
                    -
                  </Button>
                  <span className="text-foreground text-xl font-medium">3</span>
                  <Button className="w-10 border border-border bg-background text-ring text-xl hover:text-background">
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end"></div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="flex flex-col p-6 shadow-lg rounded-xl bg-background space-y-4">
            <h2 className="text-xl font-semibold text-center">Order Summary</h2>

            <div className="flex justify-between text-foreground mt-6">
              <span>Total Price</span>
              <span className="text-primary">510$</span>
            </div>

            <div className="flex justify-between text-foreground">
              <span>Delivery</span>
              <span className="text-primary">30$</span>
            </div>

            <div className="border-t pt-3 border-border flex justify-between">
              <span>Grand Total</span>
              <span className="text-primary font-semibold">540$</span>
            </div>

            <Button
              className="w-full py-6 bg-primary hover:bg-red-600 text-background text-lg"
              onClick={() => navigate(appRoutes.checkout)}
            >
              Checkout
            </Button>
          </div>
          <div className="flex flex-col p-3 shadow-lg rounded-xl bg-background">
            <div className="mt-4 flex flex-col gap-4">
              <h2 className="text-xl font-medium text-center">We Accept</h2>
              <div className="flex gap-3 flex-wrap justify-center">
                <img src={companyImg1} className="h-9" alt="visa" />
                <img src={companyImg2} className="h-9" alt="mastercard" />
                <img src={companyImg3} className="h-9" alt="paypal" />
                <img src={companyImg4} className="h-9" alt="pay" />
                <img src={companyImg5} className="h-9" alt="apple pay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
