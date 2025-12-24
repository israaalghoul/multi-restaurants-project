import { useState } from "react";
import MenuTabs from "./menu-tabs";
import MenuFilters from "./menu-filters";
import MenuGrid from "./menu-grid";
import MenuList from "./menu-list";
import { menuItems } from "../mock-data/menu-data";
import jsPDF from "jspdf";

export default function MenuSection() {
  const [category, setCategory] = useState("Pasta");
  const [view, setView] = useState("cards");
  const [sortBy, setSortBy] = useState("");

  const filtered = menuItems.filter((item) => item.category === category);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price") return a.price - b.price;
    return 0;
  });

  const downloadMenu = () => {
    const pdf = new jsPDF();
    pdf.text("Restaurant Menu", 10, 10);
    sorted.forEach((item, index) => {
      pdf.text(`${item.name}  -  ${item.price}$`, 10, 20 + index * 10);
    });
    pdf.save("menu.pdf");
  };

  return (
    <section className="max-w-5xl mx-auto flex flex-col items-center justify-center py-16 lg:px-0 px-6 overflow-hidden">

      <h2 className="text-center text-3xl font-bold mb-2">
        Our <span className="text-primary">Menu</span>
      </h2>

      <p className="text-center text-foreground mb-8">
        Explore our special, tasteful dishes on the Restaurant Menu!
      </p>

      <MenuTabs category={category} setCategory={setCategory} />

      <MenuFilters
        view={view}
        setView={setView}
        sortBy={sortBy}
        setSortBy={setSortBy}
        downloadMenu={downloadMenu}
      />

      {view === "cards" ? <MenuGrid items={sorted} /> : <MenuList items={sorted} />}

    </section>
  );
}
