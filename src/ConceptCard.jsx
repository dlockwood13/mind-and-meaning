import { Card, CardContent } from "./Card";

export default function ConceptCard({ concept }) {
  return (
    <Card>
      <CardContent>
        <p className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400">{concept.domain}</p>
        <h4 className="mb-2 text-lg font-bold text-slate-950">{concept.title}</h4>
        <p className="text-sm leading-6 text-slate-500">{concept.description}</p>
      </CardContent>
    </Card>
  );
}
