import {Route, Routes } from "react-router";
import { DefaultLayout } from "../shared/layout/general-layout/default-layout";
import Home from "../pages/home";
import ContactUs from "../pages/contact";
import {SignUpForm} from "../features/auth/components/sign-up-form";
import { BlankLayout } from "../shared/layout/general-layout/blank-layout";
import { LoginForm } from "../features/auth/components/login-form";
import { appRoutes } from "./app-routes";

export function GeneralRoutes(){
  return (
        <Routes>
          <Route
            path={appRoutes.home}
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route
            path={appRoutes.contact}
            element={
              <DefaultLayout>
                <ContactUs />
              </DefaultLayout>
            }
          />
            <Route
            path={appRoutes.auth.signUp}
            element={
              <BlankLayout>
                <SignUpForm />
              </BlankLayout>
            }
          />
              <Route
            path={appRoutes.auth.login}
            element={
              <BlankLayout>
                <LoginForm />
              </BlankLayout>
            }
          />
        </Routes>
  )
}
