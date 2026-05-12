import { Card, CardContent } from "../components/Card";
import Button from "../components/Button";
import { reflectionPrompts } from "../data/curriculum";

export default function JournalScreen() {
  return (
    <main className="space-y-6 p-5 lg:p-8">
      <section>
        <h3 className="mb-2 text-2xl font-bold text-slate-950">Reflection practice</h3>
        <p className="max-w-3xl text-slate-500">
          Use structured reflection to turn psychology and philosophy into applied self-awareness. The journal follows the DEAL model: describe the experience, examine it through concepts, and articulate what will change next.
        </p>
      </section>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <CardContent>
            <label className="mb-3 block text-sm font-semibold text-slate-700">Describe: what actually happened?</label>
            <textarea
              className="mb-5 min-h-28 w-full rounded-3xl border bg-slate-50 p-5 text-sm outline-none focus:border-slate-400"
              placeholder="Write the facts before interpreting them..."
            />

            <label className="mb-3 block text-sm font-semibold text-slate-700">Examine: which concept explains it?</label>
            <textarea
              className="mb-5 min-h-28 w-full rounded-3xl border bg-slate-50 p-5 text-sm outline-none focus:border-slate-400"
              placeholder="Cognitive bias, emotion, habit loop, ethical framework, existential tension, or thought experiment..."
            />

            <label className="mb-3 block text-sm font-semibold text-slate-700">Articulate learning: now what changes?</label>
            <textarea
              className="min-h-28 w-full rounded-3xl border bg-slate-50 p-5 text-sm outline-none focus:border-slate-400"
              placeholder="Name the practical insight and one behaviour you will test next..."
            />

            <div className="mt-4 flex justify-end">
              <Button>Save reflection</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardContent>
              <h4 className="mb-2 text-lg font-bold text-slate-950">Guided prompt bank</h4>
              <p className="mb-4 text-sm leading-6 text-slate-500">
                Prompts are organised to move from observation to theory to future action.
              </p>
              <div className="space-y-3">
                {reflectionPrompts.map((prompt) => (
                  <div key={prompt} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {prompt}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h4 className="mb-2 text-lg font-bold text-slate-950">Practice modes</h4>
              <ul className="space-y-3 text-sm leading-6 text-slate-600">
                <li><strong>Reflection-in-action:</strong> notice and adjust while the event is happening.</li>
                <li><strong>Reflection-on-action:</strong> analyse the event afterwards and extract learning.</li>
                <li><strong>Perspective shift:</strong> rewrite the same event from another person's point of view.</li>
                <li><strong>Thought experiment:</strong> stress-test a belief in a simplified philosophical scenario.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
