import { useState } from "react";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import contactImg from "@/assets/contact.jpg";
import { Phone, Printer, Mail, ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
export default function ContactSection() {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <section className="min-h-screen bg-background flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 py-20 gap-16">
      <div className="flex-1 space-y-8 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-left leading-tight">
          <span className="text-primary">Contact</span>
          <span className="text-foreground"> Us</span>
        </h2>
        <p className="text-foreground max-w-lg">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore Et Dolore MagnaWe’d love to hear
          from you! Fill out the form below and our team will get back to you as
          soon as possible.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted!");
          }}
          className="space-y-4 max-w-lg"
        >
          <Input
            type="text"
            placeholder="Name"
            required
            className="bg-background border focus-visible:border-primary focus-visible:ring-transparent rounded-lg px-4 py-5 focus-visible:ring-2 "
          />
          <Input
            type="email"
            placeholder="Email"
            required
            className="bg-background border focus-visible:border-primary focus-visible:ring-transparent rounded-lg px-4 py-5 focus-visible:ring-2 "
          />

          <Input
            type="number"
            placeholder="Phone number"
            className="bg-background border focus-visible:border-primary focus-visible:ring-transparent rounded-lg px-4 py-5 focus-visible:ring-2 "
          />

          <InputGroup className="bg-background border focus-visible:border-primary focus-visible:ring-0 focus-visible:shadow-none rounded-lg py-5">
            <InputGroupInput
              placeholder="How did you find us?"
              value={selectedValue}
              // onChange={(e) => setSelectedValue(e.target.value)}
              readOnly
            />
            <InputGroupAddon align="inline-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="More"
                    size="icon-xs"
                  >
                    <ChevronDownIcon className="size-3" />
                  </InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-background">
                  {["Facebook", "LinkedIn", "Friends"].map((item) => (
                    <DropdownMenuItem
                      key={item}
                      onClick={() => setSelectedValue(item)}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </InputGroupAddon>
          </InputGroup>
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-background w-full font-semibold rounded-lg px-8 py-5 mt-4"
          >
            Send Message
          </Button>
        </form>

        <div className="flex flex-col sm:flex-row justify-between gap-6 pt-10 max-w-lg">
          {/* Phone */}
          <div className="flex items-center justify-center content-center sm:items-start text-center sm:text-left gap-3">
            <Phone className="w-6 h-6 text-primary mb-2" />
            <div className="flex flex-col justify-center">
              <h5 className="font-semibold text-foreground">Phone</h5>
              <span className="text-foreground text-sm">+123 456 7890</span>
            </div>
          </div>

          {/* Fax */}
          <div className="flex items-center justify-center content-center sm:items-start text-center sm:text-left gap-3">
            <Printer className="w-6 h-6 text-primary mb-2" />
            <div className="flex flex-col justify-center">
              <h5 className="font-semibold text-foreground">Fax</h5>
              <span className="text-foreground text-sm">+123 456 7891</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center content-center sm:items-start text-center sm:text-left gap-3">
            <Mail className="w-6 h-6 text-primary mb-2" />
            <div className="flex flex-col justify-center">
              <h5 className="font-semibold text-foreground">Email</h5>
              <span className="text-foreground text-sm">info@termbi.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <img
          src={contactImg}
          alt="Contact illustration"
          className="w-full h-full rounded-3xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
