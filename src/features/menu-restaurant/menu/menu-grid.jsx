import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import saladImg from "@/assets/salad.jpg";
import CardPopup from "../item-popup/card-popup";


export default function MenuGrid({ items }) {
  const [selected, setSelected] = useState(null);
  const [popupItem, setPopupItem] = useState(null);
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
            className={`hover:scale-105 bg-accent rounded-xl lg:w-[400px] w-[270px] flex lg:gap-4 gap-1.5 p-0 cursor-pointer transition border
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
              <p className="text-md font-light text-foreground">
                {item.description}
              </p>

              <div className="flex justify-between items-center mt-8">
                <span className="text-primary font-semibold">
                  {item.price} $
                </span>

                  <ShoppingCart
                    size={20}
                    className="text-primary cursor-pointer"
                  />
               
              </div>
            </div>
            <div className="w-1/2 ">
              <img
                src={saladImg}
                alt=""
                className=" rounded-xl
            h-44
            object-cover
            object-center
            rounded-tl-none rounded-bl-none"
              />
            </div>
          </div>
        ))}
      </div>
      <CardPopup item={popupItem} onClose={() => setPopupItem(null)} />
    </>
  );
}
