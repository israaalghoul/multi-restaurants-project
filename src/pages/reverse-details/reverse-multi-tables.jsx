import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePickerUsingPopover } from "@/shared/components/date-picker";
import { TimePicker } from "@/shared/components/time-picker";
import { ChevronDown } from "lucide-react";

export function ReverseMultiTables() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [openGrid, setOpenGrid] = useState(false);
  const [openListTables, setOpenListTables] = useState(false);

  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const tableNumber = ["2 Tables", "3 Tables", "4 Tables", "5 Tables"];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left column  */}
          <div className="hidden lg:block">
            <div className="flex flex-col gap-8 text-foreground">
              <span>Booking date</span>
              <span>Booking Time</span>
              <span>Tables number</span>
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
              <TimePicker
                time={time}
                setTime={setTime}
                openGrid={openGrid}
                setOpenGrid={setOpenGrid}
              />
            </div>
            <div>
              <Label className="mb-2 text-sm lg:hidden block">
                Tables number
              </Label>
              <div className="relative w-full">
                <div
                  onClick={() => setOpenListTables((p) => !p)}
                  className="
          w-full border border-border/60 shadow rounded-md 
          p-2 text-sm bg-background cursor-pointer
          flex justify-between items-center
        "
                >
                  <span>{number || "Select a number"}</span>
                  <ChevronDown size={18} />
                </div>

                {/* GRID DROPDOWN */}
                {openListTables && (
                  <div
                    className="
            absolute top-full left-0 w-full mt-2
            bg-background rounded-lg shadow-xl z-40 p-4
          "
                  >
                    <div>
                      {tableNumber.map((t) => (
                        <div
                          key={t}
                          onClick={() => {
                            setNumber(t);
                            setOpenListTables(false);
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
