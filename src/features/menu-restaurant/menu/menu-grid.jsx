import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import saladImg from "@/assets/salad.jpg";
import CardPopup from "../item-popup/card-popup";

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}
export default function MenuGrid({ items }) {
  const [selected, setSelected] = useState(null);
  const [popupItem, setPopupItem] = useState(null);
  if (!items || items.length === 0) {
    return (
      <div className="text-center text-muted-foreground mt-8">
        No items in this category.
      </div>
    );
  }
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setSelected(item.id);
              setPopupItem(item);
            }}
            className={`hover:scale-105 bg-accent rounded-xl lg:w-[400px] w-[270px] flex lg:flex-row flex-col lg:gap-4 gap-1.5 p-0 cursor-pointer transition border
            ${
              selected === item.id
                ? "border-2 border-primary"
                : "border border-transparent"
            }
          `}
          >
            <div className="w-1/2 pl-3 flex flex-col justify-center">
              <h3 className="font-semibold text-lg text-foreground">
                {item.name}
              </h3>
              <p className="text-sm font-light text-foreground">
                {truncateText(item.description, 85)}
              </p>

              <div className="flex justify-between items-center mt-8">
                <span className="text-primary font-semibold">
                  {item.price} $
                </span>

                <ShoppingCart
                  size={20}
                  className="text-primary cursor-pointer"
                  key={item.id}
                  onClick={() => {
                    setSelected(item.id);
                    setPopupItem(item);
                  }}
                />
              </div>
            </div>
            <div className="min-w-1/2">
              <img
                src={item.image || saladImg}
                alt={item.name}
                className=" rounded-xl
            h-44 min-w-49.5
            object-cover
         
            object-center
            rounded-tl-none rounded-bl-none"
              />
            </div>
          </div>
        ))}
      </div>
      {/* <CardPopup item={popupItem} onClose={() => setPopupItem(null)} /> */}
         {popupItem && <CardPopup item={popupItem} onClose={() => setPopupItem(null)} />}
    </>
  );
}
