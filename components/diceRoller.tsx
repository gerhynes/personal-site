import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import DiceButton from "./diceButton";
import RollResults from "./rollResults";
import D20 from "../public/images/dice/d20.svg";
import D12 from "../public/images/dice/d12.svg";
import D10 from "../public/images/dice/d10.svg";
import D8 from "../public/images/dice/d8.svg";
import D6 from "../public/images/dice/d6.svg";
import D4 from "../public/images/dice/d4.svg";

type RollResult = {
  sides: number;
  result: number;
};

function DiceRoller() {
  const dice = [
    {
      name: "d4",
      sides: 4,
      image: <D4 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
    {
      name: "d6",
      sides: 6,
      image: <D6 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
    {
      name: "d8",
      sides: 8,
      image: <D8 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
    {
      name: "d100",
      sides: 100,
      image: <D10 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
    {
      name: "d10",
      sides: 10,
      image: <D10 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
    {
      name: "d12",
      sides: 12,
      image: <D12 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
    {
      name: "d20",
      sides: 20,
      image: <D20 className="h-14 w-14 fill-slate-300" />,
      count: 0,
    },
  ];

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentDice, setCurrentDice] = useState(dice);
  const [diceToRoll, setDiceToRoll] = useState<number[]>([]);
  const [rollResults, setRollResults] = useState<RollResult[]>([]);

  function incrementCurrentDice(name: string) {
    const newDice = currentDice.map((die) => {
      if (die.name === name) {
        die.count = die.count + 1;
      }
      return die;
    });
    setCurrentDice(newDice);
  }

  function resetCurrentDice() {
    setCurrentDice(dice);
  }

  function updateDiceToRoll(sides: number) {
    setDiceToRoll([...diceToRoll, sides]);
  }

  function openMenu() {
    setMenuIsOpen(true);
  }

  function clearDice() {
    setMenuIsOpen(false);
    setDiceToRoll([]);
    resetCurrentDice();
  }

  function rollDice(diceToRoll: number[]) {
    const rollResults: RollResult[] = [];

    diceToRoll.forEach((sides) => {
      let roll = Math.floor(Math.random() * (sides - 1) + 1);
      let rollResult = {} as RollResult;
      rollResult.sides = sides;
      rollResult.result = roll;
      rollResults.push(rollResult);
    });

    console.log(rollResults);

    setRollResults(rollResults);
  }

  function handleRoll() {
    rollDice(diceToRoll);
    clearDice();
  }

  return (
    <div
      className="pointer-events-none fixed top-0 z-50 flex h-full w-full"
      id="rollingSpace"
    >
      <div id="diceArea" className="flex flex-col items-start justify-end p-4">
        <div
          className={`mb-2 flex flex-col-reverse gap-2 ${
            menuIsOpen ? `` : `hidden`
          }`}
          id="diceMenu"
        >
          {currentDice.map((die) => (
            <DiceButton
              key={die.name}
              die={die}
              updateDiceToRoll={updateDiceToRoll}
              incrementCurrentDice={incrementCurrentDice}
            />
          ))}
        </div>
        <div className="pointer-events-auto flex gap-2" id="diceButtons">
          {menuIsOpen ? (
            <button
              className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-teal-500 bg-slate-800 hover:bg-slate-700"
              onClick={clearDice}
            >
              <BsXLg className="h-6 w-6 fill-white" />
            </button>
          ) : (
            <button
              className="flex h-16 w-16 justify-center rounded-full bg-teal-500 hover:bg-teal-600"
              onClick={openMenu}
            >
              <D20 className="h-16 w-16 fill-white" />
            </button>
          )}
          {diceToRoll.length > 0 ? (
            <button
              className="h-16 w-24 rounded-full bg-red-600 text-lg font-bold uppercase tracking-wider text-white hover:bg-red-800"
              onClick={handleRoll}
            >
              Roll
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex h-full w-full flex-col items-end justify-end p-4">
        <RollResults rollResults={rollResults} />
      </div>
    </div>
  );
}
export default DiceRoller;
