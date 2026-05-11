import { useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";
import ConceptCard from "../components/ConceptCard";
import Metric from "../components/Metric";
import { modules } from "../data/modules";
import { dailyPrompts } from "../data/prompts";

export default function HomeScreen({ filteredConcepts }) {
  const prompt = useMemo(() => {
    const index = new Date().getDate() % dailyPrompts.length;
    return dailyPrompts[index];
  }, []);

  return (
    <main className="space-y-8 p-5 lg:p-8">
      <section className="grid gap-5 xl:grid-cols-[1.4fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm"
        >
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-slate-300">Daily inquiry</p>
            <h3 className="text-3xl font-bold leading-tight md:text-5xl">{prompt}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">Start reflection</Button>
            <Button variant="darkOutline">Explore related concepts</Button>
          </div>
        </motion.div>

        <Card className="rounded-[2rem]">
          <CardContent>
            <p className="mb-5 text-sm font-semibold text-slate-500">Progress snapshot</p>
            <div className="space-y-5">
              <Metric label="Lessons completed" value="12" detail="of 69" />
              <Metric label="Journal streak" value="5" detail="days" />
              <Metric label="Saved concepts" value="18" detail="items" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold tracking-tight text-slate-950">Core modules</h3>
          <Button variant="ghost">View all</Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className="transition hover:-translate-y-1 hover:shadow-md">
                <CardContent>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-2xl bg-slate-100 p-3 text-slate-900">
                      <Icon size={22} />
                    </div>
                    <ChevronRight size={18} className="text-slate-400" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-slate-950">{module.title}</h4>
                  <p className="mb-5 text-sm leading-6 text-slate-500">{module.subtitle}</p>
                  <p className="text-sm font-medium text-slate-700">{module.lessons} lessons</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-950">Featured concepts</h3>
        <div className="grid gap-4 lg:grid-cols-3">
          {filteredConcepts.length > 0 ? (
            filteredConcepts.map((concept) => <ConceptCard key={concept.title} concept={concept} />)
          ) : (
            <p className="rounded-3xl bg-white p-6 text-sm text-slate-500 shadow-sm">No concepts match your search.</p>
          )}
        </div>
      </section>
    </main>
  );
}
