import { useState } from "react";
import saladImg from "@/assets/salad.jpg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function CardPopup({ item, onClose }) {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("Choose Option");

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  const totalPrice = item.price * quantity;
  return (
    <div className=" fixed inset-0  bg-card-foreground/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-accent rounded-2xl p-6 w-full max-w-[900px] max-h-screen overflow-y-auto relative shadow-xl">
        <button
          className="absolute top-4 right-4 text-border hover:text-primary text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="flex lg:flex-row flex-col justify-evenly gap-3">
          <img
            src={saladImg}
            className="w-[350px] h-[350px] object-cover rounded-xl"
          />
          <div className="flex flex-col justify-center gap-2">
            <h2 className="text-2xl font-semibold">{item.name}</h2>
            <p className="text-xl text-primary font-bold">{item.price} $</p>
            <p className="text-muted-foreground">{item.description}</p>

            {/* CHOOSE OPTION */}
            <Label className="text-sm font-medium mt-2">Product Option</Label>
            <DropdownMenu>
              <DropdownMenuTrigger className="w-[220px] shadow-[0_0_25px_rgba(0,0,0,0.1)] transition bg-background rounded-lg py-2 px-4 flex justify-between items-center">
                {selectedOption}
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[220px] border-0 bg-background">
                <DropdownMenuItem
                  onClick={() => setSelectedOption("Extra sauce")}
                  className="flex justify-between"
                >
                  Extra sauce
                  <span className="text-primary">+ 5$</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => setSelectedOption("With Mushrooms")}
                  className="flex justify-between"
                >
                  With Mushrooms
                  <span className="text-primary">+ 5$</span>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() => setSelectedOption("With Ketchup")}
                  className="flex justify-between"
                >
                  With Ketchup
                  <span className="text-primary">+ 5$</span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setSelectedOption("Extra Cream")}
                  className="flex justify-between"
                >
                  Extra Cream
                  <span className="text-primary">+ 5$</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* SPECIAL REQUEST */}
            <Label className="text-sm font-medium mt-3">
              Special Request
            </Label>
            <Input
              type="text"
              placeholder="Tell us if you have: an allergy, an ingredient you don't like, etc."
              className="border rounded-lg py-2 px-4 w-[350px] text-sm bg-background"
            />

            {/* ADD TO CART */}
            <div className="flex items-center gap-4 mt-6">

              <button className="flex gap-14 bg-primary text-background py-1 px-6 rounded-lg text-lg ">
                Add to Cart 
                <span>
                {totalPrice} $
                </span>
              </button>
              <div className="flex items-center gap-3 shadow-[0_0_25px_rgba(0,0,0,0.1)] transition bg-background rounded-lg">
                <button
                  onClick={decrease}
                  className="pl-3 py-1 text-xl"
                >
                  -
                </button>
                <span className="text-muted-foreground/50 text-2xl"> 
                    |
                </span>
                <span className="text-lg font-medium text-primary">{quantity}</span>
                   <span className="text-muted-foreground/50 text-2xl"> 
                    |
                </span>
                <button
                  onClick={increase}
                  className=" pr-3 py-1 text-xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
