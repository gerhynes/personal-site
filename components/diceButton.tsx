import { useState } from "react";

type DiceButtonProps = {
  die: {
    name: string;
    sides: number;
    image: any;
    count: number;
  };
  updateDiceToRoll: Function;
  incrementDiceCount: Function;
};

function DiceButton({
  die,
  updateDiceToRoll,
  incrementDiceCount,
}: DiceButtonProps) {
  function handleClick() {
    updateDiceToRoll(die.sides);
    incrementDiceCount(die.name);
  }

  return (
    <div className="relative h-16 w-16 rounded-full">
      <button
        className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900"
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
  );
}
export default DiceButton;
