import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";
import { appRoutes } from "../../../routes/app-routes";
import logoImg from "@/assets/logo.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function NavItem({ label, to }) {
  const navigate = useNavigate();
  const baseStyle =
    "text-background hover:text-primary-400 transition-colors duration-200 cursor-pointer";
  return (
    <button
      onClick={() => navigate(to, { replace: true })}
      className={baseStyle}
    >
      {label}
    </button>
  );
}

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
        {/* Logo */}
        <a href="#">
          <img src={logoImg} alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavItem label="Home" to={appRoutes.home} />
          <NavItem label="Services" to={appRoutes.home} />
          <NavItem label="About us" to={appRoutes.home} />
          <NavItem label="Contact us" to={appRoutes.contact} />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center  bg-transparent hover:bg-transparent border-0 focus-visible:ring-transparent"
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
          <Button
            onClick={() => navigate(appRoutes.auth.signUp, { replace: true })}
            className="bg-transparent hover:bg-primary w-25 text-background rounded border-2"
          >
            Log in
          </Button>
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
            <NavItem label="Home" to={appRoutes.home} />
            <NavItem label="Services" to={appRoutes.home} />
            <NavItem label="About us" to={appRoutes.home} />
            <NavItem label="Contact us" to={appRoutes.contact} />

            <img
              src="https://flagcdn.com/us.svg"
              alt="US Flag"
              className="w-6 h-4"
            />
            <Button
              onClick={() => navigate(appRoutes.auth.signUp)}
              className="bg-transparent hover:bg-primary w-25 text-background"
            >
              Log in
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
