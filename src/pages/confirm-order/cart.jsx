import { useEffect } from "react";
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
import useCartStore from "@/store/cartStore";
import useMenuStore from "@/store/menuStore";
import {Loader} from "@/shared/components/loader";

export function Cart() {
  const navigate = useNavigate();
  const activeRestaurantId = useCartStore((state) => state.activeRestaurantId);
  const items = useCartStore((state) => state.items);
  const cartLoading = useCartStore((state) => state.loading);
  const error = useCartStore((state) => state.error);
  const { updateItem, deleteItem } = useCartStore.getState();

const { categories,fetchCategories, loading: menuLoading } = useMenuStore();

  const backToRestaurantLink = activeRestaurantId 
    ? `/restaurant/${activeRestaurantId}` 
    : appRoutes.home;
 
const cartDisplayItems = items.map(cartItem => {
    let productData = null;
    for (const category of categories) {
      const foundProduct = category.products?.find(p => p.id === cartItem.product_id);
      if (foundProduct) {
        productData = foundProduct;
        break;
      }
    }
    return {
      ...cartItem,
      product: productData || cartItem.product,
    };
  });
  
  const grandTotal = cartDisplayItems.reduce((total, item) => {
    const itemPrice = item.product?.price || 0;
    return total + (itemPrice * item.quantity);
  }, 0);
 const deliveryFee = 30;
  const finalTotal = grandTotal + deliveryFee;


  if (cartLoading || (activeRestaurantId && menuLoading)) {
    return <>
    <div className="text-center py-34 flex flex-col gap-6">
       Loading Cart...
        <div>
        <Loader />
        </div>
    </div>;
    </>
  }
  
  if (error) {
    return <div className="text-center py-28 text-primary">{error}</div>;
  }
  
  if (items.length === 0) {
      return <div className="text-center py-28">Your cart is empty.</div>;
  }
   if (categories.length === 0) {
      return <div className="text-center py-34 flex flex-col gap-6">
       Loading product details...
       <div>
        <Loader />
       </div>
        
    </div>;
    
  }
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 pt-12">
        {/* Left */}
        <div className="w-full lg:w-2/3">
          {/* Cart */}
           {cartDisplayItems.map((cartItem) => (
          <div 
          key={cartItem.id}
          className="flex p-4 w-full shadow rounded-xl bg-secondary/30 gap-4 flex-wrap">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Button className="w-10 bg-primary text-background text-xl">
                  ✔
                </Button>
              </div>
              <img
                src={cartItem.product.image || saladImg}
                className="w-32 h-32 rounded-xl object-cover"
                alt={cartItem.product.name}
              />
            </div>
            <div className="md:ml-4 flex flex-col justify-between flex-1">
              <div className="flex justify-between">
                <h3 className="font-medium"> {cartItem.product.name}</h3>
                {/* Delete */}
                 <Trash2 onClick={() => deleteItem(cartItem.id)} className="cursor-pointer text-primary flex justify-end"/>
              
              </div>
              <p className="text-warning text-sm font-medium flex gap-5">
                20%{" "}
                <span className="text-muted-foreground line-through">360$</span>
              </p>
              <div className="flex justify-between flex-wrap gap-2">
                <p className="text-primary font-medium text-lg"> {(cartItem.product.price * cartItem.quantity).toFixed(2)} $</p>
                {/* Quantity */}
                <div className="flex items-end gap-3">
                  <Button onClick={() => updateItem(cartItem.id, { quantity: cartItem.quantity - 1 })} disabled={cartItem.quantity <= 1} className="w-10 border border-border bg-background text-ring text-2xl hover:text-background">
                    -
                  </Button>
                  <span className="text-foreground text-xl font-medium">{cartItem.quantity}</span>
                  <Button onClick={() => updateItem(cartItem.id, { quantity: cartItem.quantity + 1 })} className="w-10 border border-border bg-background text-ring text-xl hover:text-background">
                    +
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end"></div>
          </div>
           ))}
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
              <span className="text-primary font-semibold">{finalTotal.toFixed(2)} $</span>
            </div>

             <Button onClick={() => navigate(appRoutes.checkout)}
              className="w-full py-6 bg-primary hover:bg-red-600 text-background text-lg"
        
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
