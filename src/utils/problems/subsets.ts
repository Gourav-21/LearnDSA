import assert from "assert";
import { Problem } from "../types/problem";

export const subsetsHandler = (fn: any) => {
    try {
        const tests = [
            [1, 2, 3],
            [0],
            [4, 5, 6, 7],
        ];
        const answers = [
            [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]],
            [[],[0]],
            [[],[4],[5],[4,5],[6],[4,6],[5,6],[4,5,6],[7],[4,7],[5,7],[4,5,7],[6,7],[4,6,7],[5,6,7],[4,5,6,7]],
        ];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.deepEqual(result.sort(), answers[i].sort());
        }
        return true;
    } catch (error: any) {
        console.log("Error from subsetsHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeSubsetsJS = `function subsets(nums) {
  // Write your code here
};`;

export const subsets: Problem = {
    id: "subsets",
    title: "78. Subsets",
    problemStatement: `
    <p class='mt-3'>Given an integer array <code>nums</code> that may contain duplicates, return all possible subsets (the power set).</p>
    <p class='mt-3'>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p>
    `,
    examples: [
        {
            id: 0,
            inputText: `nums = [1,2,3]`,
            outputText: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`,
        },
        {
            id: 1,
            inputText: `nums = [0]`,
            outputText: `[[],[0]]`,
        },
        {
            id: 2,
            inputText: `nums = [4,5,6,7]`,
            outputText: `[[],[4],[5],[4,5],[6],[4,6],[5,6],[4,5,6],[7],[4,7],[5,7],[4,5,7],[6,7],[4,6,7],[5,6,7],[4,5,6,7]]`,
        },
    ],
    constraints: `
    <li class='mt-2'><code>1 <= nums.length <= 10</code></li>
    <li class='mt-2'><code>-10 <= nums[i] <= 10</code></li>
    <li class='mt-2'>All the numbers of <code>nums</code> are <strong>unique</strong>.</li>
    `,
    starterCode: starterCodeSubsetsJS,
    handlerFunction: subsetsHandler,
    starterFunctionName: "function subsets(nums) {",
    order: 9,
};
