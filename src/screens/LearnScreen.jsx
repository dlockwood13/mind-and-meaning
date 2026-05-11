import { Card, CardContent } from "../components/Card";

const topics = ["Ethics", "Cognitive Biases", "Existentialism", "Emotion Regulation", "Logic", "Identity"];

export default function LearnScreen() {
  return (
    <main className="p-5 lg:p-8">
      <h3 className="mb-2 text-2xl font-bold text-slate-950">Learning library</h3>
      <p className="mb-6 max-w-2xl text-slate-500">
        Replace this placeholder with lesson paths, quizzes, spaced repetition, audio summaries, and concept maps.
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => (
          <Card key={topic}>
            <CardContent>
              <h4 className="mb-2 font-bold text-slate-950">{topic}</h4>
              <p className="text-sm leading-6 text-slate-500">
                Topic landing page skeleton with lessons, readings, exercises, and saved notes.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
