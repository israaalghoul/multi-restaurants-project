import React, { useState } from "react";

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
import saladImg from "@/assets/salad.jpg";
const products = [
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
  {
    id: "11236587267",
    img: saladImg,
    date: "20-07-2024",
    amount: "500$",
  },
];

export function MyOrder() {
  const rowsPerPage = 5;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(products.length / rowsPerPage);

  const currentData = products.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Order</h2>

      <div className="flex flex-col justify-between lg:h-[75vh]">
        <Table>
          <TableHeader className="[&_tr]:border-none">
            <TableRow className="text-primary font-semibold">
              <TableHead className="text-center">Order id</TableHead>
              <TableHead className="text-center">Products</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Details</TableHead>
              <TableHead className="text-center">Review</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="[&_tr]:border-none ">
            {currentData.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-muted-foreground text-center">
                  {item.id}
                </TableCell>

                <TableCell className="flex justify-center">
                  <img
                    src={item.img}
                    className="w-14 h-14 rounded-md object-cover"
                    alt="product"
                  />
                </TableCell>

                <TableCell className="text-muted-foreground text-center">
                  {item.date}
                </TableCell>
                <TableCell className="text-foreground text-center">
                  {item.amount}
                </TableCell>

                <TableCell className="text-primary cursor-pointer hover:underline text-center">
                  View details
                </TableCell>

                <TableCell className="text-primary cursor-pointer hover:underline text-center">
                  Review order
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
