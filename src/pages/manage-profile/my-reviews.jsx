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
import { Star } from "lucide-react";

import saladImg from "@/assets/salad.jpg";

const reviews = [
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 1,
    review:
      "A delicious and beautifully presented dish that just needs a little salt to be perfect.",
  },
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 5,
    review:
      "Delicious dish and good service but it has a lot of hot spices which makes it difficult to eat.",
  },
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 3,
    review:
      "The taste is bad and the vegetables are not fresh, I don't want to eat this dish again.",
  },
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 1,
    review:
      "A delicious and beautifully presented dish that just needs a little salt to be perfect.",
  },
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 1,
    review:
      "Delicious dish and good service but it has a lot of hot spices which makes it difficult to eat.",
  },
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 1,
    review:
      "The taste is bad and the vegetables are not fresh, I don't want to eat this dish again.",
  },
  {
    img: saladImg,
    date: "20-07-2024",
    rating: 1,
    review: "Delicious dish and good service but it has a lot of hot spices which makes it difficult to eat.",
  },
];

export function MyReviews() {
  const rowsPerPage = 3;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(reviews.length / rowsPerPage);

  const currentData = reviews.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
const Stars = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-warning text-warning" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
};

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">My Reviews</h2>

      <div className="flex flex-col justify-between lg:h-[75vh]">
        <Table>
          <TableBody className="[&_tr]:border-none flex flex-col gap-5">
            {currentData.map((item, index) => (
              <TableRow key={index}>
                <div className="p-5 flex gap-5 bg-muted sm:flex-row flex-col lg:h-30 rounded-xl">
                  <img
                    src={item.img}
                    className="w-20 h-20 rounded-md object-cover"
                    alt="product"
                  />

                  <div className="flex flex-col justify-between gap-1 p-1 w-full">
                    <div className="flex flex-col md:flex-row gap-3 justify-between">
                      <Stars rating={item.rating} />
                      {item.date}
                    </div>
                    <p className="font-light text-muted-foreground text-[16px]">
                      {item.review}
                    </p>
                  </div>
                </div>
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
