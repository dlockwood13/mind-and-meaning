import Button from "../components/Button";
import { Card, CardContent } from "../components/Card";

export default function JournalScreen() {
  return (
    <main className="p-5 lg:p-8">
      <h3 className="mb-2 text-2xl font-bold text-slate-950">Reflection journal</h3>
      <p className="mb-6 max-w-2xl text-slate-500">
        A guided space for self-inquiry. Later, connect this to authentication, encryption, tagging, and AI-assisted reflection summaries.
      </p>
      <Card className="rounded-[2rem]">
        <CardContent>
          <label className="mb-3 block text-sm font-semibold text-slate-700">What are you noticing?</label>
          <textarea
            className="min-h-52 w-full rounded-3xl border bg-slate-50 p-5 text-sm outline-none focus:border-slate-400"
            placeholder="Write a reflection, thought pattern, question, or philosophical tension..."
          />
          <div className="mt-4 flex justify-end">
            <Button>Save reflection</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
