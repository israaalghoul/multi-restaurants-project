import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

const books = [
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
  {
    id: "11236587267",
    date: "20-07-2024",
    time: "14:00",
    guests: "20",
    status: "Confirmed",
  },
];

export function MyBooking() {
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(books.length / rowsPerPage);

  const currentData = books.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Booking</h2>

      <div className="flex flex-col justify-between lg:h-[75vh]">
        <Table>
          <TableHeader className="[&_tr]:border-none">
            <TableRow className="text-primary font-semibold">
              <TableHead className="text-center">Booking ID</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Time</TableHead>
              <TableHead className="text-center">Guests</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Details</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="[&_tr]:border-none ">
            {currentData.map((item, index) => (
              <TableRow key={index} className="h-18">
                <TableCell className="text-muted-foreground text-center">
                  {item.id}
                </TableCell>

                <TableCell className="text-muted-foreground text-center">
                  {item.date}
                </TableCell>
                <TableCell className="text-foreground text-center">
                  {item.time}
                </TableCell>
                <TableCell className="text-foreground text-center">
                  {item.guests}
                </TableCell>
                <TableCell className="text-success text-center">
                  {item.status}
                </TableCell>
                <TableCell className="text-primary cursor-pointer hover:underline text-center">
                  View details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="mt-4 flex justify-center">
          <Pagination>
            <PaginationContent>
              {Array.from({ length: totalPages }, (_, i) => {
                const active = page === i + 1;
                return (
                  <PaginationItem key={i}>
                    <PaginationLink
                      className={`
              px-4 py-2 rounded-md text-sm cursor-pointer
              ${
                active
                  ? "bg-primary text-background border-0 hover:bg-primary/70 hover:text-background"
                  : "bg-transparent text-foreground border border-border hover:bg-border hover:text-foreground"
              }
            `}
                      onClick={() => setPage(i + 1)}
                      isActive={page === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
