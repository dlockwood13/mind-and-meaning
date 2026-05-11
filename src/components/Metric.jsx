export default function Metric({ label, value, detail }) {
  return (
    <div className="flex items-end justify-between border-b pb-4 last:border-b-0 last:pb-0">
      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="text-3xl font-bold text-slate-950">{value}</p>
      </div>
      <p className="text-sm text-slate-400">{detail}</p>
    </div>
  );
}
