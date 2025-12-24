import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerUsingPopover } from "@/shared/components/date-picker";
import { TimeInput } from "@/shared/components/time-input";
import { ChevronDown } from "lucide-react";

export function ReverseRestaurant() {
  const [date, setDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left column  */}
          <div className="hidden lg:block">
            <div className="flex flex-col gap-8 text-foreground">
              <span>Booking date</span>
              <span>Booking Time</span>
              <span>Guests</span>
            </div>
          </div>
          {/* Middle column */}
          <div className="space-y-4">
            <div>
              <Label className="mb-2 text-sm lg:hidden block">
                Booking date
              </Label>
              <DatePickerUsingPopover date={date} setDate={setDate} />
            </div>

            <div>
              <Label className="mb-2 text-sm lg:hidden block">
                Booking Time
              </Label>
              <div className="flex gap-3 items-center">
                <span>From</span>
                <TimeInput
                  time={timeFrom}
                  setTime={setTimeFrom}
                  placeHolderTime={"10:00"}
                />
                <span>To</span>
                <TimeInput
                  time={timeTo}
                  setTime={setTimeTo}
                  placeHolderTime={"16:00"}
                />
              </div>
            </div>
            <div>
              <Label className="mb-2 text-sm lg:hidden block">Guests</Label>
              <Input
                type="number"
                min={1}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="Enter number"
                className="bg-background border border-border/60 shadow"
              />
            </div>
          </div>
        </div>

        {/* Right column  */}
        <div className="col-span-1 lg:col-span-1">
          <Label className="mb-6 text-md">Notes</Label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter your notes, important details or special request"
            className="w-full min-h-[95px] border border-border/60 shadow rounded-md p-4 text-sm bg-white resize-none"
          />

          <div className="mt-6 flex justify-center lg:justify-start"></div>
        </div>
      </div>
    </>
  );
}
