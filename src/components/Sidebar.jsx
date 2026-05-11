import { Bookmark, Compass, Library, PenLine, Settings, Sparkles, User } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Compass },
  { id: "learn", label: "Learn", icon: Library },
  { id: "journal", label: "Journal", icon: PenLine },
  { id: "saved", label: "Saved", icon: Bookmark },
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="hidden min-h-screen w-72 border-r bg-white/80 p-6 backdrop-blur lg:block">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-2xl bg-slate-900 p-3 text-white">
          <Sparkles size={22} />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">Mind & Meaning</h1>
          <p className="text-sm text-slate-500">Psychology × Philosophy</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                isActive ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-10 rounded-3xl bg-slate-100 p-5">
        <p className="mb-3 text-sm font-semibold text-slate-900">Product hook</p>
        <p className="text-sm leading-6 text-slate-600">
          Combine structured lessons with reflective practice so users can turn abstract ideas into daily insight.
        </p>
      </div>
    </aside>
  );
}
