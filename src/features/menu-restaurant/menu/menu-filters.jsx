import { Button } from "@/components/ui/button";

export default function MenuFilters({
  view,
  setView,
  sortBy,
  setSortBy,
  downloadMenu,
}) {
  return (
    <div className="flex flex-wrap justify-center lg:gap-5 gap-1.5 mb-8">
      <Button
        className={
          view === "cards"
            ? "bg-transparent hover:bg-primary hover:text-background text-foreground border border-primary"
            : "bg-transparent hover:bg-muted-foreground hover:text-background text-foreground  border border-border"
        }
        onClick={() => setView("cards")}
      >
        View as Cards
      </Button>

      <Button
       className={
          view === "list"
            ? "bg-transparent hover:bg-primary hover:text-background text-foreground border border-primary"
            : "bg-transparent hover:bg-muted-foreground hover:text-background text-foreground  border border-border"
        }

        onClick={() => setView("list")}
      >
        View as List
      </Button>
      <span className="text-border text-2xl"> | </span>
      <Button
       className={
          sortBy === "name"
            ? "bg-transparent hover:bg-primary hover:text-background text-foreground border border-primary"
            : "bg-transparent hover:bg-muted-foreground hover:text-background text-foreground  border border-border"
        }
        onClick={() => setSortBy("name")}
      >
        Sort by Name
      </Button>

      <Button
       className={
          sortBy === "price"
            ? "bg-transparent hover:bg-primary hover:text-background text-foreground border border-primary"
            : "bg-transparent hover:bg-muted-foreground hover:text-background text-foreground  border border-border"
        }
        onClick={() => setSortBy("price")}
      >
        Sort by Price
      </Button>
      <span className="text-border text-2xl"> | </span>
      <Button className="bg-transparent hover:bg-primary hover:text-background text-foreground border border-border" onClick={downloadMenu}>
        Download Menu
      </Button>
    </div>
  );
}
