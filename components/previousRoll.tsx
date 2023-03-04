type Roll = {
  diceSummary: string;
  resultSummary: string;
  total: number;
};

type PreviousRollProps = {
  roll: Roll;
};

function PreviousRoll({ roll }: PreviousRollProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-2 rounded-lg bg-slate-600 p-4 text-slate-300">
      <span className="font-semibold uppercase tracking-wider text-teal-500">
        Roll
      </span>
      <span className="flex flex-wrap">{roll.resultSummary}</span>
      <span className="text-2xl font-semibold">{roll.total}</span>
    </div>
  );
}
export default PreviousRoll;
