import React from "react";
import { Input } from "@/components/ui/input";

export function TimeInput({ time, setTime, placeHolderTime }) {
  return (
    <div className="relative w-[93px]">
      <Input
        type="text"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="        
        peer bg-background shadow focus-visible:border-primary text-foreground
        "
      />

      {!time && (
        <span
          className="
        absolute left-3 top-1/2 -translate-y-1/2 
        text-muted-foreground pointer-events-none 
        peer-focus:text-muted-foreground
      "
        >
          {placeHolderTime}
        </span>
      )}
    </div>
  );
}
