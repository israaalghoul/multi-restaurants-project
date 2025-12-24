import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["Pasta", "Salad", "Seafood", "Sandwiches", "Pizza", "Burger", "Juice"];

export default function MenuTabs({ category, setCategory }) {
  return (
    <Tabs value={category} onValueChange={setCategory} className="lg:w-4xl w-sm flex justify-center items-center mb-6 ">
      
      <TabsList className="bg-transparent">
        {categories.map((cat) => (
          <TabsTrigger
            key={cat}
            value={cat}
            className="text-muted-foreground 
            lg:text-xl md:text-sm text-[11px]
            lg:px-10 md:px-5 px-1
            border-0 border-b border-muted-foreground 
            data-[state=active]:shadow-none 
            data-[state=active]:text-primary 
            data-[state=active]:border-primary 
            data-[state=active]:border-b-2  
            rounded-none"
          >
            {cat}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
