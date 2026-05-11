import { Card, CardContent } from "../components/Card";

export default function SettingsScreen() {
  return (
    <main className="p-5 lg:p-8">
      <h3 className="mb-2 text-2xl font-bold text-slate-950">Settings</h3>
      <p className="mb-6 max-w-2xl text-slate-500">
        Placeholder for notifications, privacy controls, theme selection, export tools, and account settings.
      </p>
      <Card>
        <CardContent>
          <div className="space-y-4">
            <SettingRow title="Daily reminder" detail="Prompt the user to reflect once per day." />
            <SettingRow title="Private journal mode" detail="Prepare for encrypted or local-first storage." />
            <SettingRow title="Learning preference" detail="Let users choose practical, academic, or mixed content." />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

function SettingRow({ title, detail }) {
  return (
    <div className="rounded-2xl bg-slate-100 p-4">
      <p className="font-semibold text-slate-900">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </div>
  );
}
