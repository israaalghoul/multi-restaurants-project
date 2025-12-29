import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MenuTabs from "./menu-tabs";
import MenuFilters from "./menu-filters";
import MenuGrid from "./menu-grid";
import MenuList from "./menu-list";
// import { menuItems } from "../mock-data/menu-data";
import useMenuStore from '@/store/menuStore';
import useCartStore from '@/store/cartStore';
import jsPDF from "jspdf";
import {Loader} from "@/shared/components/loader"

export default function MenuSection() {
  const categories = useMenuStore((state) => state.categories);
  const products = useMenuStore((state) => state.products);
  const loadingCategories = useMenuStore((state) => state.loadingCategories);
  const loadingProducts = useMenuStore((state) => state.loadingProducts);
  const error = useMenuStore((state) => state.error);
  
  const { fetchCategories, fetchProducts } = useMenuStore.getState();
  const { restaurantId } = useParams();

  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [view, setView] = useState("cards");
  const [sortBy, setSortBy] = useState("");
  useEffect(() => {
    if (restaurantId) {
      // setActiveCartRestaurant(parseInt(restaurantId, 10));
      fetchCategories(restaurantId);
    }
  }, [restaurantId, fetchCategories]);

 useEffect(() => {
    if (restaurantId && activeCategoryId) {
      fetchProducts(restaurantId, activeCategoryId);
    }
  }, [restaurantId, activeCategoryId, fetchProducts]);

  useEffect(() => {
    if (categories && categories.length > 0 && !activeCategoryId) {
      // console.log("MenuSection: Setting initial active category to:", categories[0].id.toString());
      setActiveCategoryId(categories[0].id.toString());
    }
  }, [categories]);

  if (loadingCategories || loadingProducts) {
    return <div className="text-center py-16 flex flex-col gap-6">
    Loading menu...
    <div>
    <Loader />
    </div>
    </div>;
  }

  if (error) {
    return <div className="text-center py-16 text-primary">Error: {error}</div>;
  }
  let productsToShow = [...(products || [])];
  

  if (sortBy) {
    productsToShow = [...productsToShow].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "price") return a.price - b.price;
      return 0;
    });
  }
   if (error) {
    return <div className="text-center p-8 text-primary">Error: {error}</div>;
  }

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
         {loadingCategories ? (
        <div className="text-center p-8">Loading categories...</div>
      ) : (
        <MenuTabs 
          category={activeCategoryId} 
          setCategory={setActiveCategoryId} 
        />
      )}
  
      <MenuFilters
        view={view}
        setView={setView}
        sortBy={sortBy}
        setSortBy={setSortBy}
        downloadMenu={downloadMenu}
      />

     {loadingProducts ? (
        <div className="text-center p-8">Loading products...</div>
      ) : (
        view === "cards" ? <MenuGrid items={productsToShow} /> : <MenuList items={productsToShow} />
      )}

    </section>
  );
}
