type DiceButtonProps = {
  die: {
    name: string;
    sides: number;
    image: any;
    count: number;
  };
  updateDiceToRoll: Function;
  incrementCurrentDice: Function;
};

function DiceButton({
  die,
  updateDiceToRoll,
  incrementCurrentDice,
}: DiceButtonProps) {
  function handleClick() {
    updateDiceToRoll(die.sides);
    incrementCurrentDice(die.name);
  }

  return (
    <div className="group pointer-events-auto relative flex items-center">
      <div className="relative h-14 w-14 rounded-full">
        <button
          className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-700 group-hover:bg-slate-600"
          onClick={handleClick}
        >
          {die.image}
          {die.sides === 100 ? die.image : ""}
          <span className="sr-only">{die.name}</span>
        </button>
        {die.count > 0 ? (
          <span className="absolute top-0 -right-2 flex w-6 items-center justify-center rounded-full bg-teal-500 text-white">
            {die.count}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="absolute inset-x-0 -bottom-4 flex justify-center text-slate-300">
        <p className="block w-10 rounded-lg bg-slate-700 text-center text-sm group-hover:bg-slate-600">
          {die.name}
        </p>
      </div>
    </div>
  );
}
export default DiceButton;
