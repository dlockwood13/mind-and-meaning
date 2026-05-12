import { Card, CardContent } from "../components/Card";
import { curriculumModules, mentalModels, thoughtExperiments } from "../data/curriculum";

function ModuleCard({ module }) {
  return (
    <Card>
      <CardContent>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{module.lessonCount} lessons</p>
            <h4 className="mt-1 text-xl font-bold text-slate-950">{module.title}</h4>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Core module</span>
        </div>
        <p className="mb-4 text-sm leading-6 text-slate-600">{module.summary}</p>
        <p className="mb-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <strong>Objective:</strong> {module.objective}
        </p>
        <div className="space-y-4">
          {module.sections.map((section) => (
            <div key={section.title} className="border-t pt-4">
              <h5 className="mb-2 font-semibold text-slate-900">{section.title}</h5>
              <ul className="space-y-2 text-sm leading-6 text-slate-600">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function LearnScreen() {
  return (
    <main className="space-y-8 p-5 lg:p-8">
      <section>
        <h3 className="mb-2 text-2xl font-bold text-slate-950">Curriculum architecture</h3>
        <p className="max-w-4xl text-slate-500">
          A 69-lesson interdisciplinary programme integrating empirical behavioural science, rigorous philosophical inquiry, and applied reflective practice. The curriculum is designed to help learners understand the mechanics of mind, interrogate knowledge and ethics, and convert insight into deliberate cognitive and moral development.
        </p>
      </section>

      <section className="grid gap-5 xl:grid-cols-3">
        {curriculumModules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        <Card>
          <CardContent>
            <h4 className="mb-2 text-xl font-bold text-slate-950">Mental models toolkit</h4>
            <p className="mb-5 text-sm leading-6 text-slate-500">
              These models convert psychology into applied metacognition, helping learners reduce bias and make better decisions under complexity.
            </p>
            <div className="space-y-3">
              {mentalModels.map((model) => (
                <div key={model.name} className="rounded-2xl bg-slate-50 p-4">
                  <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-semibold text-slate-900">{model.name}</h5>
                    <span className="text-xs font-medium text-slate-400">{model.origin}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{model.use}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h4 className="mb-2 text-xl font-bold text-slate-950">Reflective thought experiments</h4>
            <p className="mb-5 text-sm leading-6 text-slate-500">
              Thought experiments act as controlled simulators for identity, justice, consciousness, meaning, and metaphysical belief.
            </p>
            <div className="space-y-3">
              {thoughtExperiments.map((experiment) => (
                <div key={experiment.name} className="rounded-2xl bg-slate-50 p-4">
                  <p className="mb-1 text-xs font-bold uppercase tracking-wide text-slate-400">{experiment.category}</p>
                  <h5 className="font-semibold text-slate-900">{experiment.name}</h5>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{experiment.prompt}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
