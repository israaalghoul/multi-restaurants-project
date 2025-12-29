import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CustomBreadcrumb from "@/shared/components/breadcrumb";
import { appRoutes } from "../../routes/app-routes";
import { DatePickerUsingPopover } from "@/shared/components/date-picker";
import useCartStore from "@/store/cartStore";
import { Loader } from "@/shared/components/loader";

export function Checkout() {
  const navigate = useNavigate();
  const [date, setDate] = useState();
  const items = useCartStore((state) => state.items);
  const loading = useCartStore((state) => state.loading);
  const error = useCartStore((state) => state.error);
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    if (items.length === 0 && !loading) {
      console.log("Checkout.jsx: Cart seems empty, fetching...");
      fetchCart();
    }
  }, [items, loading, fetchCart]);

  const restaurantIdFromCart = items[0]?.product?.restaurant_admin_id;
  const backToRestaurantLink = restaurantIdFromCart
    ? `/restaurant/${restaurantIdFromCart}`
    : "/";

  if (error) {
    return <div className="text-center py-28 text-primary">{error}</div>;
  }

  if (loading || items.length === 0) {
    return (
      <div className="text-center py-34 flex flex-col gap-6">
        Loading Checkout...
        <div>
          <Loader />
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (items.length === 0) {
      navigate(appRoutes.cart);
    }
  }, [items, navigate]);

  const grandTotal = items.reduce((total, item) => {
    const itemPrice = item.product?.price || 0;
    return total + itemPrice * item.quantity;
  }, 0);

  const deliveryFee = 30;
  const finalTotal = grandTotal + deliveryFee;
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
      <div className="flex flex-col lg:flex-row justify-between gap-16 pt-12">
        {/* Left */}

        <div className="flex flex-col w-full lg:w-2/3  text-center items-center gap-25">
          <div className="flex flex-col w-[80%] p-8 shadow rounded-xl bg-secondary/30 gap-6 text-center items-center">
            <h3 className="font-medium">Payment Details</h3>

            <div className="flex flex-col space-y-3 ">
              <Label className="text-sm font-medium">Cardholder Name</Label>
              <Input
                type="text"
                placeholder="Enter Cardholder name"
                className="border rounded-lg py-2 px-4 w-full text-sm bg-background"
              />
              <Label className="text-sm font-medium ">Card Number</Label>
              <Input
                type="text"
                placeholder="0000-0000-0000-0000"
                className="border rounded-lg py-2 px-4 w-full text-sm bg-background"
              />
              <div className="md:flex flex-wrap space-y-3 justify-between gap-6">
                <div className="space-y-3">
                  <Label className="text-sm font-medium ">
                    Expiration Date
                  </Label>
                  <DatePickerUsingPopover date={date} setDate={setDate} />
                </div>
                <div className="space-y-3">
                  <Label className="text-sm font-medium ">CVV</Label>
                  <Input
                    type="text"
                    placeholder="123"
                    className="border rounded-lg py-2 px-4 w-full text-sm bg-background"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="px-20 py-6 bg-primary hover:bg-red-600 text-background text-lg cursor-pointer"
            onClick={() => navigate(appRoutes.placeOrder)}
          >
            Place order
          </Button>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="flex flex-col p-6 shadow-lg rounded-xl bg-background space-y-4">
            <h2 className="text-xl font-semibold text-center">Order Summary</h2>

            <div className="flex justify-between text-foreground mt-6">
              <span>Total Price</span>
              <span className="text-primary">{grandTotal.toFixed(2)} $</span>
            </div>

            <div className="flex justify-between text-foreground">
              <span>Delivery</span>
              <span className="text-primary">{deliveryFee.toFixed(2)} $</span>
            </div>

            <div className="border-t pt-3 border-border flex justify-between">
              <span>Grand Total</span>
              <span className="text-primary font-semibold">
                {finalTotal.toFixed(2)} $
              </span>
            </div>
          </div>
          <div className="flex flex-col p-6 shadow-lg rounded-xl bg-background ">
            <div className="flex flex-col gap-4 ml-6">
              <h2 className="text-xl font-medium text-center">
                Choose Payment Method
              </h2>
              <div className="flex gap-3 flex-col justify-start mt-4">
                <RadioGroup defaultValue="option1" className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id="option1" />
                    <Label htmlFor="option1" className="font-normal">
                      PayPal
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id="option2" />
                    <Label htmlFor="option2" className="font-normal">
                      Credit Card
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id="option3" />
                    <Label htmlFor="option3" className="font-normal">
                      Google Pay
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
