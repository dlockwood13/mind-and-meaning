import { Card, CardContent } from "../components/Card";
import { savedReflections } from "../data/reflections";

export default function SavedScreen() {
  return (
    <main className="p-5 lg:p-8">
      <h3 className="mb-6 text-2xl font-bold text-slate-950">Saved reflections</h3>
      <div className="space-y-4">
        {savedReflections.map((reflection, index) => (
          <Card key={index}>
            <CardContent>
              <p className="leading-7 text-slate-700">{reflection}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
