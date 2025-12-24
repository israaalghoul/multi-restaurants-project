import React from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

export function DatePickerUsingPopover({ date, setDate }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className="
                      shadow-[0_0_3px_rgba(0,0,0,0.1)] w-full 
                      justify-start text-left font-normal 
                      bg-background text-muted-foreground
                      hover:bg-background"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : "MM/YYYY"}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="p-3 bg-background border-0 shadow-[0_0_5px_rgba(0,0,0,0.1)]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
