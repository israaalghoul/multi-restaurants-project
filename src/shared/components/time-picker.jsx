import React from "react";
import { ChevronDown } from "lucide-react";

export function TimePicker({ time, setTime, openGrid, setOpenGrid }) {
  const times = [
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];
  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpenGrid((p) => !p)}
        className="
          w-full border border-border/60 shadow rounded-md 
          p-2 text-sm bg-background cursor-pointer
          flex justify-between items-center
        "
      >
        <span>{time || "Select a time"}</span>
        <ChevronDown size={18} />
      </div>

      {/* GRID DROPDOWN */}
      {openGrid && (
        <div
          className="
            absolute top-full left-0 lg:w-[800px] w-full mt-2
          bg-background rounded-lg shadow-2xl z-40 p-4
          "
        >
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {times.map((t) => (
              <div
                key={t}
                onClick={() => {
                  setTime(t);
                  setOpenGrid(false);
                }}
                className="
                  cursor-pointer text-center lg:p-3 p-0 rounded-md transition-all
                  border border-border bg-background
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
  );
}
