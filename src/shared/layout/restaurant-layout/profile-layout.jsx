import React from "react";
import CustomBreadcrumb from "@/shared/components/breadcrumb";
import { User, ShoppingBag, CalendarCheck2, Star, LogOut } from "lucide-react";
import { appRoutes } from "@/routes/app-routes";
import profileImg from "@/assets/profile.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
function ProfileLayout({ page, children }) {
  const navigate = useNavigate();

  function formatHref(str) {
  const noSpaces = str.replace(/\s+/g, '-');
  const result = noSpaces.toLowerCase();
  return result;
}
let result = formatHref(`${page}`);
return (
  <section className=" bg-secondary/40 flex flex-col lg:px-26 px-8 pt-28">
    
      <div className="flex justify-start">
        <CustomBreadcrumb
          items={[
            { label: "Home", href: appRoutes.home },
            { label: "My Profile", href: appRoutes.home },
            { label: `${ page }`, href: `/${result}` },
          ]}
        />
      </div>
      <div className="flex justify-center py-10 min-h-screen">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CARD */}
          <div className="bg-background rounded-xl shadow py-6 flex flex-col items-center">
            <img
              src={profileImg}
              alt="profile"
              className="w-18 h-18 rounded-full object-cover"
            />

            <h3 className="mt-4 font-semibold">Ahmad AL-Ahmad</h3>

            <div className="w-full mt-6 space-y-2">
      
              <div className="flex items-center gap-3 b p-3 px-9 cursor-pointer hover:bg-primary/10"
                onClick={() => navigate(appRoutes.manageProfile)}>
                <User size={18} />
                <span>Manage Profile</span>
              </div>

      
              <div className="flex items-center gap-3 p-3 px-9 cursor-pointer hover:bg-primary/10"
                onClick={() => navigate(appRoutes.myOrder)}>
                <ShoppingBag size={18} />
                <span>
                My Order</span>
              </div>

              <div className="flex items-center gap-3 p-3 px-9 cursor-pointer hover:bg-primary/10"
                onClick={() => navigate(appRoutes.myBooking)}>
                <CalendarCheck2 size={18} />
                <span>My Bookings</span>
              </div>

              <div className="flex items-center gap-3 p-3 px-9 cursor-pointer hover:bg-primary/10"
                onClick={() => navigate(appRoutes.myReviews)}>
                <Star size={18} />
                <span>My Reviews</span>
              </div>
            </div>

            <Button className="mt-8 px-12 w-36 bg-primary hover:bg-primary text-background">
              Sign Out
            </Button>
          </div>
       <div className="bg-background rounded-xl shadow p-8 lg:col-span-2">
          {children}
       </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileLayout;
