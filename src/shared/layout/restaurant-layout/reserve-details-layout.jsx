import React, { useState } from "react";
import CustomBreadcrumb from "@/shared/components/breadcrumb";
import { User, ShoppingBag, CalendarCheck2, Star, LogOut } from "lucide-react";
import { appRoutes } from "@/routes/app-routes";
import profileImg from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import tableImg from "@/assets/Table.png";
import multiTablesImg from "@/assets/Multi-tables.png";
import restaurantImg from "@/assets/Restaurant.png";
import eventImg from "@/assets/Event.png";

function ReserveDetailsLayout({ children }) {
  const cards = [
    {
      id: 1,
      title: "Reserve a table",
      image: `${tableImg}`,
      onclick: appRoutes.reverseTable,
    },
    {
      id: 2,
      title: "Reserve multiple tables",
      image: `${multiTablesImg}`,
      onclick: appRoutes.reverseMultiTables,
    },
    {
      id: 3,
      title: "Reserve all restaurant",
      image: `${restaurantImg}`,
      onclick: appRoutes.reverseRestaurant,
    },
    {
      id: 4,
      title: "Reserve for Event",
      image: `${eventImg}`,
      onclick: appRoutes.reverseForEvent,
    },
  ];

  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(1);
  return (
    <section className="w-full py-12 lg:px-26 px-8 pt-28">
      <div >
        <h3 className="text-2xl font-semibold text-foreground mb-8">
          <span className="text-primary">Reserve</span> Details
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {cards.map((option) => (
            <div
              key={option.id}
              onClick={() => {
                setActiveCard(option.id);
                navigate(option.onclick);
              }}
              className={`
                  cursor-pointer border rounded-xl p-4 flex flex-col items-center gap-3 transition-all
                  shadow-md max-w-55
                  ${
                    activeCard === option.id
                      ? "border-primary shadow-none"
                      : "border-border/60"
                  }
                `}
            >
              <p className="text-center font-normal">{option.title}</p>
              <img src={option.image} className="w-28 h-28 object-contain" />
            </div>
          ))}
        </div>
        <div>{children}</div>
        <div className="flex justify-center">
        <Button className="mt-8 px-12 w-60 bg-muted-foreground hover:bg-primary text-background">
          Reserve Now
        </Button>
        </div>
        
      </div>
    </section>
  );
}
export default ReserveDetailsLayout;
