import { Route, Routes } from "react-router";
import { DefaultLayout } from "../shared/layout/restaurant-layout/default-layout";
import HomeRestaurant from "../pages/home-restaurant";
import { SignUpPopup } from "@/features/auth/components/sign-up-popup/index";
import { LoginPopup } from "@/features/auth/components/login-popup";

import { Cart } from "../pages/confirm-order/cart";
import { Checkout } from "../pages/confirm-order/checkout";
import { appRoutes } from "./app-routes";
import { PlaceOrder } from "../pages/confirm-order/place-order";
import { Confirm } from "../pages/confirm-order/confirm";
import { ManageProfile } from "../pages/manage-profile/manage-profile";
import { MyBooking } from "../pages/manage-profile/my-booking";
import { MyOrder } from "../pages/manage-profile/my-order";
import { MyReviews } from "../pages/manage-profile/my-reviews";
import ProfileLayout from "../shared/layout/restaurant-layout/profile-layout";

import { ReverseTable } from "../pages/reverse-details/reverse-table";
import { ReverseMultiTables } from "../pages/reverse-details/reverse-multi-tables";
import { ReverseRestaurant } from "../pages/reverse-details/reverse-restaurant";
import { ReverseForEvent } from "../pages/reverse-details/reverse-for-event";

import ReserveDetailsLayout from "../shared/layout/restaurant-layout/reserve-details-layout";

export function RestaurantRoutes() {
  return (
    <Routes>
      <Route
        path={appRoutes.homeRestaurant}
        element={
          <DefaultLayout>
            <HomeRestaurant />
            <SignUpPopup />
            <LoginPopup />
          </DefaultLayout>
        }
      />
      {/* confirm order routes */}
      <Route
        path={appRoutes.cart}
        element={
          <DefaultLayout>
            <Cart />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.checkout}
        element={
          <DefaultLayout>
            <Checkout />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.placeOrder}
        element={
          <DefaultLayout>
            <PlaceOrder />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.confirmOrder}
        element={
          <DefaultLayout>
            <Confirm />
          </DefaultLayout>
        }
      />
      {/* Manage profile routes */}
      <Route
        path={appRoutes.manageProfile}
        element={
          <DefaultLayout>
            <ProfileLayout
              page={"Manage Profile"}
              children={<ManageProfile />}
            />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.myBooking}
        element={
          <DefaultLayout>
            <ProfileLayout page={"My Booking"} children={<MyBooking />} />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.myOrder}
        element={
          <DefaultLayout>
            <ProfileLayout page={"My Order"} children={<MyOrder />} />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.myReviews}
        element={
          <DefaultLayout>
            <ProfileLayout page={"My Reviews"} children={<MyReviews />} />
          </DefaultLayout>
        }
      />
      {/* Reserve Details */}
      <Route
        path={appRoutes.reverseTable}
        element={
          <DefaultLayout>
            <ReserveDetailsLayout children={<ReverseTable />} />
          </DefaultLayout>
        }
      />
      <Route
        path={appRoutes.reverseMultiTables}
        element={
          <DefaultLayout>
            <ReserveDetailsLayout children={<ReverseMultiTables />} />
          </DefaultLayout>
        }
      />{" "}
      <Route
        path={appRoutes.reverseRestaurant}
        element={
          <DefaultLayout>
            <ReserveDetailsLayout children={<ReverseRestaurant />} />
          </DefaultLayout>
        }
      />{" "}
      <Route
        path={appRoutes.reverseForEvent}
        element={
          <DefaultLayout>
            <ReserveDetailsLayout children={<ReverseForEvent />} />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}
