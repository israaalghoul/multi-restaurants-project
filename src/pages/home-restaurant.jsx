import React ,{useState}from "react";
import heroImg from "@/assets/hero-restaurant.jpg";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import MenuSection from "@/features/menu-restaurant/menu/menu-section";
import { usePopupStore } from "@/store/popup-signup-store";
function HomeRestaurant() {
    const openSignUp  = usePopupStore((s) => s.openSignUp);
 
  return (
    <>
      {/* Hero sec */}
      <section
        className="
      relative
      w-full px-6 md:px-20 md:pr-0 md:py-16 py-20 
      flex flex-col md:flex-row 
      items-center justify-between
      "
      >
        <div className="absolute inset-0 bg-card-foreground/40 md:hidden h-[500px] z-1"></div>
        <div
          className="
    absolute inset-0 
    bg-cover bg-center bg-no-repeat 
    h-[500px] 
    md:hidden
  "
          style={{
            backgroundImage: `url(${heroImg})`,
          }}
        ></div>
        {/* Left Content */}
        <div
          className="relative flex flex-col max-w-sm space-y-5 mt-15
        items-center md:items-start
         text-center md:text-left z-3"
         
        >
          <h1 className="text-3xl font-bold leading-tight md:text-foreground text-background">
            Best <span className="text-primary">Food</span>, Best{" "}
            <span className="text-primary">Services</span>!
          </h1>

          <p className="md:text-foreground text-background text-2xl">
            Sandwiches, Fries & Burger with best taste awaits you.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 md:text-foreground text-background">
            <MapPin className="text-primary w-5 h-5" />
            <p>2255 Nw 2nd Ave, Miami, FL 37214</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 md:text-foreground text-background">
            <span>Rating:</span>
            <span className="text-warning text-xl">★★★★★</span>
            <span className="font-medium">5.0</span>
          </div>

          {/* Button */}
          <Button className="bg-primary hover:bg-hover text-lg px-10 py-5 lg:w-3xs rounded-md shadow-lg cursor-pointer"
           onClick={openSignUp}>
            Reserve a table
          </Button>
        </div>

        {/* Right Image */}
        <div className=" mt-10 md:mt-0">
          <div
            className="max-md:hidden
            w-[250px] h-[250px] md:w-[450px] md:h-[450px] 
            overflow-hidden 
            md:rounded-full 
            md:rounded-tr-none 
            rounded-full 
            shadow-xl
           z-50
          "
          >
            <img
              src={heroImg}
              alt="Food"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </section>
      {/* About Sec */}
      <section className="py-12 bg-background text-center px-6 md:px-32 flex flex-col gap-6">
        <h2 className="text-3xl font-bold text-primary">
          About <span className="text-foreground">us</span>
        </h2>

        <p className="text-foreground max-w-3xl mx-auto leading-relaxed text-lg">
          Welcome to <span className="font-semibold text-primary">Termbi</span>,
          where culinary excellence meets warm hospitality.
          <br />
          Our journey began with a passion for creating unforgettable dining
          experiences.
          <br />
          At <span className="font-semibold text-primary">Termbi</span>, we
          believe in using the freshest ingredients to craft dishes that delight
          the senses.
        </p>
      </section>
      <MenuSection />
    </>
  );
}

export default HomeRestaurant;
