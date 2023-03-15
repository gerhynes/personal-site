import { useState, useEffect } from "react";
import PreviousRoll from "./previousRoll";

type RollResultsProps = {
  rollResults: RollResult[];
};

export type RollResult = {
  sides: number;
  result: number;
};

type SplitResult = {
  allDice: number[];
  allScores: number[];
};

type Roll = {
  id: string;
  diceSummary: string;
  resultSummary: string;
  total: number;
};

function RollResults({ rollResults }: RollResultsProps) {
  const [resultsPanelIsOpen, setResultsPanelIsOpen] = useState(false);
  const [rolls, setRolls] = useState<Roll[]>([]);

  function splitResults(results: RollResult[]) {
    const allDice: number[] = [];
    const allScores: number[] = [];

    results.forEach((die: RollResult) => {
      allDice.push(die.sides);
      allScores.push(die.result);
    });

    return {
      allDice,
      allScores,
    };
  }

  function getRollTotal(scores: number[]) {
    return scores.reduce((acc, curr) => acc + curr, 0);
  }

  function getDistinctDiceCount(dice: number[]) {
    const diceMap = dice.reduce((map, die) => {
      // if particular die doesn't exist in Map, set to 0
      if (!map.has(die)) map.set(die, 0);
      // increment count of distinct dice
      return map.set(die, map.get(die)! + 1);
    }, new Map<number, number>());

    return diceMap;
  }

  function summarizeDice(diceMap: Map<number, number>) {
    let summary: string[] = [];
    diceMap.forEach((val, key) => {
      summary.push(`${val}d${key}`);
    });
    return summary.join(" + ");
  }

  function summarizeRolls(scores: number[]) {
    return scores.join(" + ");
  }

  function clearResults() {
    setRolls([]);
    setResultsPanelIsOpen(false);
  }

  function updateRolls(rollResults: RollResult[]) {
    // check prevents empty array being processed on initial render
    if (rollResults.length > 0) {
      const splitResult = splitResults(rollResults);
      const resultSummary = summarizeRolls(splitResult.allScores);
      const diceSummary = summarizeDice(
        getDistinctDiceCount(splitResult.allDice)
      );
      const total = getRollTotal(splitResult.allScores);

      let rollsToKeep: Roll[] = [];

      if (rolls.length > 2) {
        rollsToKeep = rolls.slice(-2);
      } else {
        rollsToKeep = rolls;
      }

      setRolls([
        ...rollsToKeep,
        {
          id: crypto.randomUUID(),
          resultSummary,
          diceSummary,
          total,
        },
      ]);

      setResultsPanelIsOpen(true);
    }
  }

  useEffect(() => {
    updateRolls(rollResults);
  }, [rollResults]);

  return (
    <>
      {resultsPanelIsOpen ? (
        <div className="pointer-events-auto w-full" id="resultsArea">
          <div className="flex flex-col items-end">
            <div id="previousRolls">
              {rolls.length > 1 &&
                rolls
                  .slice(0, -1)
                  .map((roll) => <PreviousRoll roll={roll} key={roll.id} />)}
            </div>
            <div
              className="mb-4 w-full max-w-[256px] flex-1 rounded-xl bg-slate-700 px-4 py-4 text-slate-300"
              id="latestRoll"
            >
              <span className="mb-2 block font-bold uppercase tracking-wider text-teal-500">
                Roll
              </span>
              <div className="mb-2 flex w-full items-center justify-evenly gap-2">
                <span className="text-xl">{rolls.at(-1)?.resultSummary}</span>
                <span className="text-slate-300">&#61;</span>
                <span className="text-5xl font-bold">
                  {rolls.at(-1)?.total}
                </span>
              </div>
              <span className="font-semibold text-slate-300">
                {rolls.at(-1)?.diceSummary}
              </span>
            </div>
          </div>
          <div className="flex justify-end" id="resultButton">
            <button
              className="rounded-full bg-slate-700 py-1 px-4 uppercase tracking-wider text-slate-300"
              onClick={clearResults}
            >
              Clear all
              <span className="ml-2 text-lg text-slate-300">&times;</span>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
export default RollResults;
