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
    <div className="group pointer-events-auto flex items-center">
      <div className="relative h-16 w-16 rounded-full">
        <button
          className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 hover:bg-slate-700"
          onClick={handleClick}
        >
          {die.image}
          {die.sides === 100 ? die.image : ""}
        </button>
        {die.count > 0 ? (
          <span className="absolute top-0 -right-2 flex w-6 items-center justify-center rounded-full bg-slate-500 text-white">
            {die.count}
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="ml-2 hidden rounded-lg bg-white p-1 group-hover:block">
        <p>{die.name}</p>
      </div>
    </div>
  );
}
export default DiceButton;
