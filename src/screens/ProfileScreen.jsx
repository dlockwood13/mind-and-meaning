import { Card, CardContent } from "../components/Card";

const onboardingFields = ["Primary goal", "Preferred tradition", "Current challenge", "Reflection style"];

export default function ProfileScreen() {
  return (
    <main className="p-5 lg:p-8">
      <h3 className="mb-2 text-2xl font-bold text-slate-950">Profile</h3>
      <p className="mb-6 max-w-2xl text-slate-500">
        Add user preferences, goals, reminder cadence, privacy controls, and personalization settings here.
      </p>
      <Card>
        <CardContent>
          <p className="text-sm font-semibold text-slate-500">Suggested onboarding fields</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {onboardingFields.map((field) => (
              <div key={field} className="rounded-2xl bg-slate-100 p-4 text-sm font-medium text-slate-700">
                {field}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
