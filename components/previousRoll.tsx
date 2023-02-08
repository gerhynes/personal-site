type Roll = {
  summary: string;
  total: number;
};

type PreviousRollProps = {
  roll: Roll;
};

function PreviousRoll({ roll }: PreviousRollProps) {
  return (
    <div className="mb-4 flex items-center justify-between rounded-lg bg-slate-900 p-4">
      <span className="font-semibold uppercase tracking-wider text-yellow-500">
        Roll
      </span>
      <span className="text-white">{roll.summary}</span>
      <span className="text-2xl font-semibold text-white">{roll.total}</span>
    </div>
  );
}
export default PreviousRoll;
