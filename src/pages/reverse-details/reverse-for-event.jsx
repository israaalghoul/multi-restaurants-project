import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerUsingPopover } from "@/shared/components/date-picker";
import { TimePicker } from "@/shared/components/time-picker";
import { ChevronDown } from "lucide-react";
import { TimeInput } from "@/shared/components/time-input";

export function ReverseForEvent() {
  const [date, setDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [openGridEvent, setOpenEvent] = useState(false);
  const [event, setEvent] = useState("");
  const [openGridDecoration, setOpenDecoration] = useState(false);
  const [decoration, setDecoration] = useState("");
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const typeEvent = ["Wedding", "Birthday", "Graduation", "Party"];
  const typeDecoration = [
    "Wedding décor",
    "Birthday décor",
    "Graduation décor",
    "Galaxy décor",
    "Old Europe décor",
    "Others",
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left column  */}
          <div className="hidden lg:block">
            <div className="flex flex-col gap-8 text-foreground">
              <span>Booking date</span>
              <span>Booking Time</span>
              <span>Type of event</span>
              <span>Decoration</span>
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
            {/* Event */}
            <div>
              <Label className="mb-2 text-sm lg:hidden block">
                Type of event
              </Label>
              <div className="relative w-full">
                <div
                  onClick={() => setOpenEvent((p) => !p)}
                  className="
          w-full border border-border/60 shadow rounded-md 
          p-2 text-sm bg-background cursor-pointer
          flex justify-between items-center
        "
                >
                  <span>{event || "Select Event"}</span>
                  <ChevronDown size={18} />
                </div>

                {/* GRID DROPDOWN */}
                {openGridEvent && (
                  <div
                    className="
            absolute top-full left-0 w-full mt-2
            bg-background rounded-lg shadow-xl z-40 p-4
          "
                  >
                    <div>
                      {typeEvent.map((t) => (
                        <div
                          key={t}
                          onClick={() => {
                            setEvent(t);
                            setOpenEvent(false);
                          }}
                          className="
                  cursor-pointer text-center p-3 rounded-lg transition-all bg-background
                  hover:bg-primary hover:text-background
                "
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Decoration */}
            <div>
              <Label className="mb-2 text-sm lg:hidden block">Decoration</Label>
              <div className="relative w-full">
                <div
                  onClick={() => setOpenDecoration((p) => !p)}
                  className="
          w-full border border-border/60 shadow rounded-md 
          p-2 text-sm bg-background cursor-pointer
          flex justify-between items-center
        "
                >
                  <span>{decoration || "Select decoration"}</span>
                  <ChevronDown size={18} />
                </div>

                {/* GRID DROPDOWN */}
                {openGridDecoration && (
                  <div
                    className="
            absolute top-full left-0 w-full mt-2
            bg-background rounded-lg shadow-xl z-40 p-4
          "
                  >
                    <div>
                      {typeDecoration.map((t) => (
                        <div
                          key={t}
                          onClick={() => {
                            setDecoration(t);
                            setOpenDecoration(false);
                          }}
                          className="
                  cursor-pointer text-center p-3 rounded-lg transition-all bg-background
                  hover:bg-primary hover:text-background
                "
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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

        <div className="flex flex-col justify-end">
          <div className="col-span-1 lg:col-span-1">
            <Label className="mb-6 text-md">Notes</Label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Enter your notes, important details or special request"
              className="w-full min-h-[95px] border border-border/60 shadow rounded-md p-4 text-sm bg-white resize-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}
