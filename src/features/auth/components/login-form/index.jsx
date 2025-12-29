import React from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import signupImg from "@/assets/signup.png";
import logoImg from "@/assets/logo-black.svg";
import { useForm } from "@/features/auth/components/sign-up-form/hooks/use-form";
import { appRoutes } from "@/routes/app-routes";
import useAuthStore from "@/store/authStore.js";

export function LoginForm() {
  const navigate = useNavigate();
  
  const { formData, handleChange } = useForm({
    email: 'vmertz@example.org',
    password: '123456'
  });

  const { login, loading, error } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate(appRoutes.home);
    } catch (err) {
      console.error("Login attempt failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="min-h-screen flex bg-background flex-col md:flex-row ">
      {/* Left Section */}
      <div className="flex flex-col justify-center w-screen md:w-1/2 px-6 md:px-16 pt-20 py-2 gap-8  bg-secondary/80">
        <h3 className="flex justify-center text-2xl font-bold text-foreground ">Log in</h3>
        <div className="max-w-sm mx-auto space-y-2 w-full">
            <Label>
              Email <span className="text-primary">*</span>
            </Label>
            <Input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              required
            />

            <Label>
              Password <span className="text-primary ">*</span>
            </Label>
            <Input
              type="password"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              required
            />
            
            {error && <p className="text-center text-sm text-primary">{error}</p>}
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full hover:bg-destructive bg-primary text-background my-6 disabled:bg-primary/70"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </Button>

            <p className="text-center text-sm text-foreground">
              New in termbi?
              <Button
                type="button"
                onClick={() => navigate(appRoutes.auth.signUp, { replace: true })}
                className="bg-transparent text-primary hover:underline hover:bg-transparent"
              >
                Register
              </Button>
            </p>
        </div>
      </div>
      {/* Right Section (Image) */}
      <div className="flex-1 w-screen md:w-1/2 flex flex-col justify-center items-center bg-background gap-3 my-6">
        <a href="#">
          <img src={logoImg} alt="Logo" />
        </a>
        <span className="text-muted-foreground">
          Restaurants Management System
        </span>
        <img
          src={signupImg}
          alt="Restaurant illustration"
          className=" w-[80%] object-contain"
        />
      </div>
    </form>
  );
}
