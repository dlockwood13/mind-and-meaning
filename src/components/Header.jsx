import { Search, Settings } from "lucide-react";
import Button from "./Button";

export default function Header({ query, setQuery }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 px-5 py-4 backdrop-blur lg:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Today&apos;s focus</p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">Understand yourself. Think better.</h2>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-2 rounded-2xl border bg-white px-4 py-2">
            <Search size={17} className="text-slate-400" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search concepts..."
              className="w-56 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>
          <Button variant="outline" aria-label="Open settings">
            <Settings size={17} />
          </Button>
        </div>
      </div>
    </header>
  );
}
