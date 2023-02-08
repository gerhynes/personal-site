import D20 from "../public/images/dice/d20.svg";
import { useState, useEffect } from "react";
import PreviousRoll from "./previousRoll";

type RollResultsProps = {
  rollResults: RollResult[];
};

type RollResult = {
  sides: number;
  result: number;
};

type SplitResult = {
  dice: number[];
  scores: number[];
};

type Roll = {
  summary: string;
  total: number;
};

function RollResults({ rollResults }: RollResultsProps) {
  const results = [
    {
      sides: 6,
      result: 5,
    },
    {
      sides: 6,
      result: 3,
    },
  ];

  const dice: number[] = [4, 6, 6, 6];
  const scores: number[] = [1, 5, 5, 3];

  const lastRoll = {
    summary: "1 + 3",
    total: 4,
  };

  const [resultsPanelIsOpen, setResultsPanelIsOpen] = useState(false);
  const [previousRolls, setPreviousRolls] = useState<Roll[]>([]);
  const [splitResult, setSplitResult] = useState<SplitResult>({
    dice: [],
    scores: [],
  });

  function splitResults(results: RollResult[]) {
    const dice: number[] = [];
    const scores: number[] = [];

    results.forEach((die: RollResult) => {
      dice.push(die.sides);
      scores.push(die.result);
    });

    return {
      dice,
      scores,
    };
  }

  function getTotal(scores: number[]) {
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
    setPreviousRolls([]);
    setSplitResult({
      dice: [],
      scores: [],
    });
    setResultsPanelIsOpen(false);
  }

  function updatePreviousRolls(rollResults: RollResult[]) {
    // split rollResults
    const splitRes = splitResults(rollResults);
    const summary = summarizeRolls(splitRes.scores);
    const total = getTotal(splitRes.scores);

    let rollsToKeep: Roll[] = [];

    if (previousRolls.length > 2) {
      rollsToKeep = previousRolls.slice(-2);
    } else {
      rollsToKeep = previousRolls;
    }

    console.log("previous rolls", previousRolls);

    setPreviousRolls([
      ...rollsToKeep,
      {
        summary,
        total,
      },
    ]);
  }

  useEffect(() => {
    setSplitResult(splitResults(rollResults));
    setResultsPanelIsOpen(true);
    updatePreviousRolls(rollResults);
    console.log(previousRolls);
  }, [rollResults]);

  return (
    <>
      {rollResults.length > 0 ? (
        <div className="pointer-events-auto" id="resultsArea">
          <div id="previousRolls">
            {previousRolls.length > 1 &&
              previousRolls
                .slice(1, -1)
                .map((roll, i) => <PreviousRoll roll={roll} key={i} />)}
          </div>
          <div
            className="w-64 rounded-xl bg-slate-900 px-4 py-4"
            id="latestRoll"
          >
            <span className="mb-2 block font-bold uppercase tracking-wider text-yellow-500">
              Roll
            </span>
            <div className="mb-2 flex w-full items-center justify-evenly gap-2">
              <D20 className="h-10 w-10 fill-slate-300" />
              <span className="text-xl text-white">
                {summarizeRolls(splitResult.scores)}
              </span>
              <span className="text-slate-300">&#61;</span>
              <span className="text-5xl font-bold text-white">
                {getTotal(splitResult.scores)}
              </span>
            </div>
            <span className="font-semibold text-slate-300">
              {summarizeDice(getDistinctDiceCount(splitResult.dice))}
            </span>
          </div>
          <div className="mt-2 flex justify-end" id="resultButton">
            <button
              className="rounded-full bg-slate-900 py-1 px-4 uppercase tracking-wider text-white"
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
