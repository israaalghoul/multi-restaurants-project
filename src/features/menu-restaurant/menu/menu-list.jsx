import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import CardPopup from "../item-popup/card-popup";
import saladImg from "@/assets/salad.jpg";

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}
export default function MenuList({ items }) {
  const [selected, setSelected] = useState(null);
  const [popupItem, setPopupItem] = useState(null);
  return (
    <>
      <div className="w-full p-4 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setSelected(item.id);
              setPopupItem(item);
            }}
            className="flex md:flex-row flex-col items-center justify-between border-b border-b-border pb-4"
          >
            <div className="flex md:flex-row flex-col items-center">
              <div>
                <img
                  src={item.image || saladImg}
                  alt={item.name}
                  className=" rounded-xl
                        h-30 max-w-30
                        object-cover
                        object-center
                        rounded-tl-none rounded-bl-none
                        mr-4"
                />
              </div>
              <div className="mr-4">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <p className="text-md font-light text-foreground ">
                  {truncateText(item.description, 130)}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center gap-8 mt-8">
              <span className="text-primary font-semibold">{item.price} $</span>
              <ShoppingCart
                className="w-5 h-5 text-primary cursor-pointer"
                key={item.id}
                onClick={() => {
                  setSelected(item.id);
                  setPopupItem(item);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <CardPopup item={popupItem} onClose={() => setPopupItem(null)} />
    </>
  );
}
