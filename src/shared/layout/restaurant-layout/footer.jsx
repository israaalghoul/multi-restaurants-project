import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.svg";
import arrowRight from "@/assets/arrow-right.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-10">
          {/* Logo */}
          <a href="#">
            <img src={logoImg} alt="Logo" />
          </a>
          <div className="flex flex-col gap-1">
            <span>Keep in touch</span>
            {/* Media */}
            <div className="flex gap-5 items-center">
              <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                <Facebook className="w-4 h-4 text-foreground transition" />
              </div>
              <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                <Instagram className="w-4 h-4 text-foreground transition" />
              </div>
              <div className="w-6 h-6 bg-background rounded-full flex items-center justify-center shadow-sm">
                <Twitter className="w-4 h-4 text-foreground transition" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="flex gap-1">
              Provided by
              <img src={logoImg} alt="Logo" width={60} />
            </span>
            <h5 className="text-xs">www.termbi.com</h5>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Opening Hours</h3>
          <ul className="space-y-3 text-background text-md">
            <div className="flex gap-2">
              <img src={arrowRight} alt="" className="w-5 h-5 pt-1" />
              <div>
                <li>08 AM TO 12 AM</li>
                <li>MONDAY TO FRIDAY</li>
              </div>
            </div>
            <div className="flex gap-2">
              <img src={arrowRight} alt="" className="w-5 h-5 pt-1" />
              <div>
                <li>11 AM TO 10 PM</li>
                <li>SATURDAY & SUNDAY </li>
              </div>
            </div>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 text-background">
            <li>Reserve a table</li>
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletters</h3>
          <p className="text-background text-sm mb-4 leading-[30px]">
            Stay up to date with our latest news, receive exclusive deals, and
            more.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="flex flex-col"
          >
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-l-lg text-2xl bg-background rounded-lg  text-foreground focus:outline-none"
            />

            <Button className="bg-primary hover:bg-primary/90 text-background font-semibold mt-4 px-8 py-3 rounded-lg w-40">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
      <div className="bg-[#171717] flex md:flex-row flex-col items-center justify-between mx-auto px-20 py-4 gap-3">
        <div className="text-center text-background text-sm ">
          Copyright © 2024 | termbi
        </div>
        <div className="flex gap-6 items-center">
          <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm">
            <Facebook className="w-5 h-5 text-foreground transition" />
          </div>
          <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm">
            <Instagram className="w-5 h-5 text-foreground transition" />
          </div>
          <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm">
            <Twitter className="w-5 h-5 text-foreground transition" />
          </div>
        </div>
      </div>
    </footer>
  );
}
