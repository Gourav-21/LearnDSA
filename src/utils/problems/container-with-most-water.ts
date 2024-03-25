import assert from "assert";
import { Problem } from "../types/problem";

export const maxAreaHandler = (fn: any) => {
    try {
        const tests = [
            [1, 8, 6, 2, 5, 4, 8, 3, 7],
            [4, 3, 2, 1, 4],
            [1, 2, 1],
        ];
        const answers = [49, 16, 2];
        for (let i = 0; i < tests.length; i++) {
            const result = fn(tests[i]);
            assert.equal(result, answers[i]);
        }
        return true;
    } catch (error: any) {
        console.log("Error from maxAreaHandler: ", error);
        throw new Error(error);
    }
};

const starterCodeMaxAreaJS = `function maxArea(height) {
  // Write your code here
};`;

export const maxArea: Problem = {
    id: "container-with-most-water",
    title: "11. Container With Most Water",
    problemStatement: `<p class='mt-3'>
    Given <code>n</code> non-negative integers <code>height[i]</code> where each represents a point at coordinate <code>(i, height[i])</code>.
    'n' vertical lines are drawn such that the two endpoints of the line <code>i</code> is at <code>(i, height[i])</code> and <code>(i, 0)</code>.
    Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
    </p>
    <p class='mt-3'>
    Notice that you may not slant the container.
    </p>`,
    examples: [
        {
            id: 0,
            inputText: `height = [1,8,6,2,5,4,8,3,7]`,
            outputText: `49`,
        },
        {
            id: 1,
            inputText: `height = [4,3,2,1,4]`,
            outputText: `16`,
        },
        {
            id: 2,
            inputText: `height = [1,2,1]`,
            outputText: `2`,
        },
    ],
    constraints: `<li class='mt-2'><code>n == height.length</code></li>
    <li class='mt-2'><code>2 <= n <= 3 * 10^4</code></li>
    <li class='mt-2'><code>0 <= height[i] <= 3 * 10^4</code></li>`,
    starterCode: starterCodeMaxAreaJS,
    handlerFunction: maxAreaHandler,
    starterFunctionName: "function maxArea",
    order: 6,
};
