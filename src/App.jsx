import { useMemo, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import LearnScreen from "./screens/LearnScreen";
import JournalScreen from "./screens/JournalScreen";
import SavedScreen from "./screens/SavedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { featuredConcepts } from "./data/concepts";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [query, setQuery] = useState("");

  const filteredConcepts = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) return featuredConcepts;

    return featuredConcepts.filter((concept) => {
      return (
        concept.title.toLowerCase().includes(search) ||
        concept.domain.toLowerCase().includes(search) ||
        concept.description.toLowerCase().includes(search)
      );
    });
  }, [query]);

  const screens = {
    home: <HomeScreen filteredConcepts={filteredConcepts} />,
    learn: <LearnScreen />,
    journal: <JournalScreen />,
    saved: <SavedScreen />,
    profile: <ProfileScreen />,
    settings: <SettingsScreen />,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="min-w-0 flex-1">
          <Header query={query} setQuery={setQuery} />
          {screens[activeTab]}
        </div>
      </div>
    </div>
  );
}
