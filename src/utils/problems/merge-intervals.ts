import assert from "assert";
import { Problem } from "../types/problem";

export const mergeIntervalsHandler = (fn: any) => {
    try {
        const tests = [
            {
                intervals: [[1,3],[2,6],[8,10],[15,18]],
                expected: [[1,6],[8,10],[15,18]]
            },
            {
                intervals: [[1,4],[4,5]],
                expected: [[1,5]]
            },
            {
                intervals: [[1,4],[0,4]],
                expected: [[0,4]]
            }
        ];

        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i].intervals);
            assert.deepStrictEqual(result, tests[i].expected);
        }

        return true;
    } catch (error: any) {
        console.log("Error from mergeIntervalsHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeMergeIntervalsJS = `function merge(intervals) {
  // Write your code here
};`;

export const mergeIntervals: Problem = {
    id: "merge-intervals",
    title: "Merge Intervals",
    problemStatement: `
        <p class='mt-3'>
            Given an array of intervals where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>,
            merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.
        </p>
        <p class='mt-3'>
            <strong>Note:</strong> The intervals are sorted by <strong>start</strong> index.
        </p>
    `,
    examples: [
        {
            id: 0,
            inputText: `intervals = [[1,3],[2,6],[8,10],[15,18]]`,
            outputText: `[[1,6],[8,10],[15,18]]`,
        },
        {
            id: 1,
            inputText: `intervals = [[1,4],[4,5]]`,
            outputText: `[[1,5]]`,
        },
        {
            id: 2,
            inputText: `intervals = [[1,4],[0,4]]`,
            outputText: `[[0,4]]`,
        },
    ],
    constraints: `
        <li class='mt-2'>1 <= intervals.length <= 10<sup>4</sup></li>
        <li class='mt-2'>intervals[i].length == 2</li>
        <li class='mt-2'>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></li>
    `,
    starterCode: starterCodeMergeIntervalsJS,
    handlerFunction: mergeIntervalsHandler,
    starterFunctionName: "function merge(",
    order: 7,
};
