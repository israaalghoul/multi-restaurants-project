import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, ChevronDown, Search, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { appRoutes } from "../../../routes/app-routes";
import logoImg from "@/assets/logo.svg";
import profileImg from "@/assets/profile.jpg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState({
    code: "+1",
    flag: "https://flagcdn.com/us.svg",
    name: "United States",
  });

  const countries = [
    { code: "+1", flag: "https://flagcdn.com/us.svg", name: "United States" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+33", flag: "🇫🇷", name: "France" },
    { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
    { code: "+971", flag: "🇦🇪", name: "UAE" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-foreground shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <a href="#">
            <img src={logoImg} alt="Logo" />
          </a>
          {/* Search Input - hidden on small screens */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for any product"
              className="pl-10 w-72 md:w-96 bg-background border-border  focus-visible:ring-0"
            />
          </div>
        </div>
        <div className=" hidden md:flex items-center gap-4">
          {/* Cart */}
          <div className="relative cursor-pointer"
          onClick={() => navigate(appRoutes.cart)}>

              <ShoppingCart size={20}
                className="flex items-center hover:border-transparent cursor-pointer text-background "
              />
            <span className="absolute -top-2 -right-2 bg-primary text-background text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </div>
          {/* Flag */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center  bg-transparent hover:bg-transparent border-0 focus-visible:ring-transparent p-0 px-0"
              >
                <img
                  src={selectedCountry.flag}
                  alt="US Flag"
                  className="w-6 h-4 "
                />
                <ChevronDown className="w-4 h-4 text-background" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="start"
              className="bg-background border-0"
            >
              {countries.map((country) => (
                <DropdownMenuItem
                  key={country.code}
                  onClick={() => handleSelect(country)}
                  className="flex items-center space-x-2"
                >
                  <img
                    src={selectedCountry.flag}
                    alt="US Flag"
                    className="w-6 h-4"
                  />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Profile */}
          <a 
          onClick={() => navigate(appRoutes.manageProfile)}>
            <img
              src={profileImg}
              alt="Profile"
              className="w-8 h-8 rounded-full border cursor-pointer"
            />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-foreground border-t border-background shadow-lg">
          <div className="flex flex-col items-center space-y-4 py-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for any product"
                className="pl-10 bg-muted border-border"
              />
            </div>
            {/* Flag */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center  bg-transparent hover:bg-transparent border-0 focus-visible:ring-transparent p-0 px-0"
                >
                  <img
                    src={selectedCountry.flag}
                    alt="US Flag"
                    className="w-6 h-4 "
                  />
                  <ChevronDown className="w-4 h-4 text-background" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                className="bg-background border-0"
              >
                {countries.map((country) => (
                  <DropdownMenuItem
                    key={country.code}
                    onClick={() => handleSelect(country)}
                    className="flex items-center space-x-2"
                  >
                    <img
                      src={selectedCountry.flag}
                      alt="US Flag"
                      className="w-6 h-4"
                    />
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}

            <div className=" flex items-center gap-3">
              <div className="relative cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-background" />
                <span className="absolute -top-2 -right-2 bg-primary text-background text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  3
                </span>
              </div>
              <span className="text-background">My Cart</span>
            </div>
            {/* Profile */}
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={profileImg} className="w-7 h-7 rounded-full" />
              <span className="text-background">My Account</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
