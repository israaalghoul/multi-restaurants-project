import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logoImg from "@/assets/logo.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex justify-center items-center">
          {/* Logo */}
          <a href="#">
            <img src={logoImg} alt="Logo" />
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Features</h3>
          <ul className="space-y-2 text-background">
            <li>Get Website</li>
            <li>Reservation</li>
            <li>Ordering</li>
            <li>Marketing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Link</h3>
          <ul className="space-y-2 text-background">
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
