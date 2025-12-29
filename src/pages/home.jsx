import React, {useState} from "react";
import heroImg from "@/assets/hero.png";
import { Button } from "@/components/ui/button";
import logoBlackImg from "@/assets/logo-black.svg";
import logoImg from "@/assets/logo.svg";
import restaurant5 from "@/assets/restaurant1.png";
import restaurant4 from "@/assets/restaurant2.png";
import restaurant3 from "@/assets/restaurant3.png";
import restaurant2 from "@/assets/restaurant4.png";
import restaurant1 from "@/assets/restaurant5.png";
import featuresImg from "@/assets/features.jpg";
import { useNavigate } from "react-router-dom";
import { RestaurantRoutes } from "../routes/restaurant-routes";
import { toast } from "react-toastify";
// Api
import { activateRestaurant } from "@/services/api.js";
function Home() {
  const navigate = useNavigate();
  const [loadingRestaurant, setLoadingRestaurant] = useState(null);
  const [error, setError] = useState("");

  const restaurants = [
    {
      img: restaurant1,
      bg: "#fbf9f2",
      restaurant_admin_id: 8,
      slug: "tempora",
    },
    {
      img: restaurant2,
      bg: "#ffffff",
      restaurant_admin_id: 9,
      slug: "tempora",
    },
    {
      img: restaurant3,
      bg: "#ffffff",
      restaurant_admin_id: 10,
      slug: "tempora",
    },
    {
      img: restaurant4,
      bg: "#fffcfc",
      restaurant_admin_id: 11,
      slug: "tempora",
    },
    {
      img: restaurant5,
      bg: "#f7f5f4",
      restaurant_admin_id: 12,
      slug: "tempora",
    },
  ];
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"],
    },
    {
      name: "Premium",
      price: "$45",
      period: "/month",
      features: [
        "Reservation",
        "Ordering",
        "Marketing",
        "Services",
        "Services",
        "Services",
      ],
    },
    {
      name: "Enterprise",
      price: "$75",
      period: "/month",
      features: ["Services", "Services", "Services", "Services", "Services"],
    },
  ];
  // Active restaurant
  const handleRestaurantClick = async (adminId, slug) => {
    setLoadingRestaurant(adminId);
    setError("");
    try {
      const settingsResponse = await activateRestaurant(adminId);
      // console.log("--- RESTAURANT SETTINGS API RESPONSE ---");
      // console.log(settingsResponse);
      // console.log(`Navigating to restaurant with adminId: ${adminId}`);
      toast.success('Active Restaurant successfully');

      navigate(`/restaurant/${adminId}`);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to activate restaurant. Please try again.";
      toast.error(errorMessage);
      setError(errorMessage);
      setLoadingRestaurant(null);
    }
  };
  return (
    <>
      {/* Hero Section */}
      <section
        className={`
        relative flex flex-col justify-center items-start
        px-10 md:px-20 py-32 md:py-40
        text-background
        bg-url(${heroImg})
        bg-cover bg-center bg-no-repeat
        min-h-screen
      `}
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0,0,0,0), rgba(23,0,0,0.5)), url(${heroImg})`,
        }}
      >
        <div className="max-w-xl space-y-6 z-10 ">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Get your own <br /> restaurant website
          </h1>
          <p className="text-background text-lg md:text-xl">
            Ternbi’s booking solution for restaurants makes a lot of your daily
            business tasks much easier, so that you can fully focus on your
            guests.
          </p>
          <Button className="bg-primary hover:bg-hover text-lg px-10 py-5 lg:w-xs rounded-xl shadow-lg cursor-pointer">
            Try Now
          </Button>
        </div>
      </section>
      {/* Why Us Section */}
      <section className="bg-background py-24 px-6 md:px-16 flex justify-center items-center">
        <div className="relative overflow-hidden max-w-5xl text-center bg-background shadow-[0_0_25px_rgba(0,0,0,0.1)] rounded-2xl py-10 md:py-16 px-4 md:px-32 z-10">
          <h2 className="relative text-3xl md:text-4xl font-medium mb-6 flex items-stretch justify-center gap-3">
            <span className="text-primary font-light">Why </span>
            <img src={logoBlackImg} alt="Logo" width={130} />
          </h2>
          <div className="text-start">
            <p className="text-foreground text-lg leading-relaxed">
              Termbi&apos;s booking tool allows guests to check table
              availability in real time and then book a table with just a few
              clicks. Even outside of your business hours. Your effort: Low.
              Your benefit: Up to 30% more bookings. <br />
              With Termbi, you are instantly listed on over 100 national and
              international platforms.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-secondary rounded-full -translate-x-1/3 -translate-y-1/3 -z-1"></div>
          <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-border rounded-full translate-x-1/3 translate-y-1/3 -z-1"></div>
        </div>
      </section>
      {/* Restaurant Section */}
      <section className="py-20 px-6 md:px-16 text-center bg-background overflow-hidden">
        <h2 className="text-l md:text-2xl font-medium mb-12 flex justify-center gap-1.5 md:gap-2 items-stretch text-foreground">
          <span>restaurants already trust in</span>

          <img src={logoBlackImg} alt="Logo" className="w-14 md:w-20" />
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {restaurants.map((r, i) => (
            <div
              key={r.restaurant_admin_id}
              onClick={() =>
                !loadingRestaurant &&
                handleRestaurantClick(r.restaurant_admin_id, r.slug)
              }
              className={`w-[150px] h-[150px] overflow-hidden rounded-full 
                        flex items-center justify-center border-2 border-border
                        cursor-pointer transition transform hover:scale-105
                        ${
                          loadingRestaurant === r.restaurant_admin_id
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
              style={{ backgroundColor: r.bg }}
            >
              {loadingRestaurant === r.restaurant_admin_id ? (
                <p className="text-primary font-bold">Loading...</p>
              ) : (
                <img
                  src={r.img}
                  alt={`Restaurant ${r.slug}`}
                  className="w-40 h-40 object-contain"
                />
              )}
            </div>
          ))}
        </div>
         {error && <p className="text-center text-primary mt-4">{error}</p>}
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-6 md:px-16 bg-background text-background flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-12 text-foreground">
          <span className="text-primary">Pricing</span> Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 w-full max-w-5xl">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative group overflow-hidden rounded-2xl shadow-md border border-border bg-background text-center p-8 flex flex-col justify-between hover:scale-105 hover:shadow-lg transition duration-300
              }`}
            >
              <div
                className={`absolute -top-55 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-primary/80 opacity-20 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-0`}
              ></div>

              <div className="flex text-start flex-col z-10 gap-5">
                <h3 className="text-2xl font-semibold mb-2 text-foreground group-hover:text-background">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold text-foreground group-hover:text-background">
                  {plan.price}
                  <span className=" text-foreground text-base font-normal group-hover:text-background">
                    {plan.period}
                  </span>
                </p>

                <ul className="mt-12 space-y-2 text-foreground">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-start gap-2"
                    >
                      <span className="text-primary">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mt-8 px-6 py-2 rounded-lg font-medium transition-all
                    bg-primary/30 text-foreground hover:text-background hover:bg-primary 
                `}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-background py-20 px-6 md:px-16 flex justify-center items-center flex-col gap-4 ">
        <h2 className="relative text-3xl md:text-4xl font-medium mb-6 flex items-stretch justify-center gap-3">
          <img src={logoBlackImg} alt="Logo" width={120} />
          <span className="text-foreground font-semibold">Features</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Dashboard
            </h2>
            <p className="text-foreground leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={featuresImg}
              alt="Dashboard Preview"
              className="w-full rounded-3xl shadow-lg border border-border"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
