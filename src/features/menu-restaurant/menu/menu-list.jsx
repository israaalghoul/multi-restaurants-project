import { ShoppingCart } from "lucide-react";
export default function MenuList({ items }) {
  return (
    <div className="w-full lg:p-0 p-4 space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border-b border-b-border pb-4"
        >
          <div>
            <h3 className="font-semibold text-foreground">{item.name}</h3>
            <p className="text-md font-light text-foreground ">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between items-center gap-8 mt-8">
            <span className="text-primary font-semibold">{item.price} $</span>
            <ShoppingCart className="w-5 h-5 text-primary cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
