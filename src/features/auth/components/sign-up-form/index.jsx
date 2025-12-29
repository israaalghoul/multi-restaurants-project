import { useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import signupImg from "@/assets/signup.png";
import logoImg from "@/assets/logo-black.svg";
import { appRoutes } from "@/routes/app-routes";

import { useForm } from "./hooks/use-form";
import { useProgress } from "./hooks/use-progress";
import useRegistrationStore from "@/store/registrationStore";

const countries = [
  { code: "+963", flag: "🇸🇾", name: "Syria" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+1", flag: "🇺🇸", name: "United States" },
];

export function SignUpForm() {
  const navigate = useNavigate();

  // --- Hooks ---
  const { formData, handleChange, isStepValid } = useForm();
  const { step, nextStep, setStep } = useProgress(4);
  const { register, verify, loading, error: apiError } = useRegistrationStore();

  // State
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [profileImage, setProfileImage] = useState(null);
  const [formError, setFormError] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    }
  };

  const stepFields = {
    1: ["name", "address", "phone"],
    2: ["first_name", "last_name", "email"],
    3: ["password", "confirm"],
    4: [],
  };

  const handleRegister = async () => {
    // if (!isStepValid(stepFields[step])) {
    //   setFormError("Please fill in all required fields.");
    //   return;
    // }

    const registrationData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      phone: `${selectedCountry.code}${formData.phone || ""}`,
      password: formData.password,
      password_confirmation: formData.confirm,
      profile: profileImage,
    };
    // console.log("Final data being sent to API:", registrationData);

    try {
      const success = await register(registrationData);
      if (success) {
        setStep(4);
      }
    } catch (err) {
      console.error("Registration failed in component:", err);
    }
  };
  const handleNext = () => {
    setFormError("");

    if (!isStepValid(stepFields[step])) {
      setFormError("Please fill in all required fields.");
      return;
    }
    if (step === 2 && !profileImage) {
      setFormError("Please select a profile picture.");
      return;
    }
    if (step < 4) {
      nextStep();
    }
  };
  const handleVerify = async () => {
    const staticVerificationCode = "093453";
    const emailToVerify = formData.email;
    try {
      const success = await verify(emailToVerify, staticVerificationCode);
      if (success) {
        navigate(appRoutes.auth.login);
      }
    } catch (err) {
      console.error("Verification failed in component:", err);
    }
  };

  const handleStepClick = (num) => {
    if (num < step && isStepValid(stepFields[step])) setStep(num);
  };

  return (
    <div className="min-h-screen flex bg-background flex-col md:flex-row ">
      {/* Left Section */}
      <div
        className={`flex flex-col justify-center w-screen md:w-1/2 px-6 md:px-16 pt-20 py-2 gap-8
         ${step === 4 ? "bg-background" : "bg-secondary/80"}
       `}
      >
        {step === 4 && (
          <h3 className="flex justify-center text-2xl text-primary ">
            Congratulation!
          </h3>
        )}
        <div className="flex justify-center items-center space-x-4 mb-10">
          {[1, 2, 3, 4].map((num, i) => (
            <div key={num} className="flex items-center m-0">
              {/* Circle */}
              <button
                onClick={() => handleStepClick(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2
                 ${
                   num === 4
                     ? step >= 4
                       ? "bg-primary border-primary text-background"
                       : "bg-border border-border text-background "
                     : isStepValid(stepFields[num])
                     ? "bg-primary border-primary text-background"
                     : step === num
                     ? "border-primary/60 text-primary/60"
                     : "bg-border text-background border-border"
                 }
                 ${
                   num < step
                     ? "cursor-pointer hover:scale-110"
                     : "cursor-default"
                 }`}
              >
                {num === 4 ? <Check className="w-4 h-4" /> : num}
              </button>

              {/* Line */}
              {i < 3 && (
                <div
                  className={`w-16 h-0.5 transition-colors duration-300 ${
                    isStepValid(stepFields[num]) ? "bg-primary" : "bg-border"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-sm mx-auto space-y-2 w-full">
          {(apiError || formError) && (
            <p className="text-center text-sm text-primary pb-4">
              {apiError || formError}
            </p>
          )}

          {step === 1 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6">
                Tell us about your restaurant
              </h2>
              <Label>
                Restaurant name <span className="text-primary">*</span>
              </Label>
              <Input
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Label>
                Restaurant address <span className="text-primary">*</span>
              </Label>
              <Input
                name="address"
                value={formData.address || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />
              <Label>
                Your phone <span className="text-primary">*</span>
              </Label>
              <div className="flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 rounded-r-none border-border border-r-0 bg-primary/20 hover:bg-primary/20 hover:text-foreground"
                    >
                      <span>{selectedCountry.flag}</span>
                      <span>{selectedCountry.code}</span>
                      <ChevronDown className="w-4 h-4 opacity-60" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="w-40 bg-background border-0"
                  >
                    {countries.map((country) => (
                      <DropdownMenuItem
                        key={country.code}
                        onClick={() => setSelectedCountry(country)}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-lg text-foreground">
                          {country.flag}
                        </span>
                        <span className="text-foreground">{country.name}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Input
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className="rounded-l-none bg-background focus-visible:ring-0 focus-visible:border-primary mb-6"
                />
              </div>
              <Button
                onClick={handleNext}
                className="w-full hover:bg-destructive bg-primary text-background my-6"
              >
                Next
              </Button>
              <p className="text-center text-sm text-foreground">
                You already have an account?
                <Button
                  onClick={() =>
                    navigate(appRoutes.auth.login, { replace: true })
                  }
                  className="bg-transparent text-primary hover:underline hover:bg-transparent"
                >
                  Log in
                </Button>
              </p>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6">
                Tell us about yourself
              </h2>

              <Label>
                First Name <span className="text-primary">*</span>
              </Label>
              <Input
                name="first_name"
                value={formData.first_name || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-4"
              />

              <Label>
                Last Name <span className="text-primary">*</span>
              </Label>
              <Input
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />
              <Label>
                Profile Picture <span className="text-primary">*</span>
              </Label>
              <Input
                type="file"
                name="profile"
                onChange={handleFileChange}
                required
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
                accept="image/png, image/jpeg"
              />
              <Label>
                Your email <span className="text-primary">*</span>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Button
                onClick={handleNext}
                className="w-full hover:bg-destructive bg-primary text-background my-6"
              >
                Next
              </Button>
              <p className="text-center text-sm text-foreground">
                You already have an account?
                <Button
                  onClick={() =>
                    navigate(appRoutes.auth.login, { replace: true })
                  }
                  className="bg-transparent text-primary hover:underline hover:bg-transparent"
                >
                  Log in
                </Button>
              </p>
            </>
          )}
          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6">
                Set your password
              </h2>
              <Label>
                Password <span className="text-primary">*</span>
              </Label>
              <Input
                type="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Label>
                Confirm password <span className="text-primary">*</span>
              </Label>
              <Input
                type="password"
                name="confirm"
                value={formData.confirm || ""}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Button
                onClick={handleRegister}
                disabled={loading}
                className="w-full hover:bg-destructive bg-primary text-background my-6"
              >
                {loading ? "Registering..." : "Register"}
              </Button>
              <p className="text-center text-sm text-foreground">
                You already have an account?
                <Button
                  onClick={() =>
                    navigate(appRoutes.auth.login, { replace: true })
                  }
                  className="bg-transparent text-primary hover:underline hover:bg-transparent"
                >
                  Log in
                </Button>
              </p>
            </>
          )}

          {step === 4 && (
            <div className="text-center flex flex-col gap-16">
              <h2 className="text-xl font-semibold text-primary">
                Your account has created successfully!
              </h2>
              <p className="text-xl text-foreground">
                Get your restaurant started
              </p>
              <p className="text-center text-sm text-muted-foreground">
                A verification code has been sent to your email. Please verify
                your account via email.{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  {formData.email}
                </span>
              </p>

              <Button
                onClick={handleVerify}
                disabled={loading}
                className="w-full hover:bg-destructive bg-primary text-background"
              >
                {loading ? "Finalizing..." : "Complete Registration & Login"}
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* --- Right Section (Image) --- */}
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
    </div>
  );
}
