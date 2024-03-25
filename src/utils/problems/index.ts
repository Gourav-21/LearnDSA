import { Problem } from "../types/problem";
import { maxProfit } from "./best-time-to-buy-and-sell-stocks";
import { maxArea } from "./container-with-most-water";
import { jumpGame } from "./jump-game";
import { mergeIntervals } from "./merge-intervals";
import { reverseLinkedList } from "./reverse-linked-list";
import { search2DMatrix } from "./search-a-2d-matrix";
import { subsets } from "./subsets";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";

interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
	"merge-intervals":mergeIntervals,
	"subsets": subsets,
	"container-with-most-water":maxArea,
	"best-time-to-buy-and-sell-stock":maxProfit
};
 