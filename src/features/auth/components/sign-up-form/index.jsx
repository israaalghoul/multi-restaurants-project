import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import signupImg from "@/assets/signup.png";
import logoImg from "@/assets/logo-black.svg";
import { useForm } from "./hooks/use-form";
import { useProgress } from "./hooks/use-progress";
import { Check, ChevronDown } from "lucide-react";
import { appRoutes } from "../../../../routes/app-routes";

export function SignUpForm() {
  const navigate = useNavigate();
  const { formData, handleChange, isStepValid } = useForm();
  const { step, nextStep, setStep } = useProgress(4);

  const stepFields = {
    1: ["name", "address", "phone"],
    2: ["owner", "email"],
    3: ["password", "confirm"],
    4: [],
  };

  const handleNext = () => {
    if (isStepValid(stepFields[step])) {
      if (step < 4) nextStep();
      else alert("All steps completed successfully!");
    }
  };
  const handleStepClick = (num) => {
    if (num < step) setStep(num);
  };
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+1",
    flag: "🇺🇸",
    name: "United States",
  });

  const countries = [
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
  ];

  const handleSelect = (country) => setSelectedCountry(country);

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

        {/* Step Forms */}
        <div className="max-w-sm mx-auto space-y-2">
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
                value={formData.name}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Label>
                Restaurant address <span className="text-primary">*</span>
              </Label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Label>
                Restaurant phone <span className="text-primary">*</span>
              </Label>

              <div className="flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2 rounded-r-none border-border border-r-0 bg-primary/20 hover:bg-primary/20 hover:text-foreground"
                    >
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <span className="text-sm">{selectedCountry.code}</span>
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
                        onClick={() => handleSelect(country)}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-lg text-foreground">
                          {country.flag}
                        </span>
                        <span className="text-foreground">{country.name}</span>
                        <span className="ml-auto text-muted-foreground">
                          {country.code}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Input
                  name="phone"
                  value={formData.phone}
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
                Your name <span className="text-primary ">*</span>
              </Label>
              <Input
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />

              <Label>
                Your email <span className="text-primary">*</span>
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
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
                      <span className="text-xl">{selectedCountry.flag}</span>
                      <span className="text-sm">{selectedCountry.code}</span>
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
                        onClick={() => handleSelect(country)}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-lg text-foreground">
                          {country.flag}
                        </span>
                        <span className="text-foreground">{country.name}</span>
                        <span className="ml-auto text-muted-foreground">
                          {country.code}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Input
                  name="phone"
                  value={formData.phone}
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

          {step === 3 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-6">
                Set your password
              </h2>

              <Label>
                Password <span className="text-primary ">*</span>
              </Label>
              <Input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />
              <Label>
                Confirm password <span className="text-primary">*</span>
              </Label>
              <Input
                type="password"
                name="confirm"
                value={formData.confirm}
                onChange={handleChange}
                className="bg-background focus-visible:border-primary focus-visible:ring-transparent mb-6"
              />
              <Button
                onClick={handleNext}
                className="w-full hover:bg-destructive bg-primary text-background my-6"
              >
                Register
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
              <div>
                <h2 className="text-xl font-semibold text-primary">
                  Your account has created successfully!
                </h2>
                <p className="text-xl text-foreground">
                  Get your restaurant started
                </p>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                A verification code has been sent to your email. Please verify
                your account via email.{" "}
                <span className="text-primary cursor-pointer hover:underline">
                  Open my email
                </span>
              </p>
            </div>
          )}
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
    </div>
  );
}
