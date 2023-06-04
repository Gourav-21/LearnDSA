# Interval 

## Introduction
Interval questions are a subset of array questions where you are given an array of two-element arrays (an interval) and the two values represent a start and an end value. Interval questions are considered part of the array family but they involve some common techniques hence they are extracted out to this special section of their own.

An example interval array: ```[[1, 2], [4, 7]].```

Interval questions can be tricky to those who have not tried them before because of the sheer number of cases to consider when they overlap.

### Things to look out for during interviews
Clarify with the interviewer whether ```[1, 2]``` and ```[2, 3]``` are considered overlapping intervals as it affects how you will write your equality checks.
Clarify whether an interval of ```[a, b]``` will strictly follow ```a``` < ```b``` (```a``` is smaller than ```b```)
### Corner cases
- No intervals
- Single interval
- Two intervals
- Non-overlapping intervals
- An interval totally consumed within another interval
- Duplicate intervals (exactly the same start and end)
- Intervals which start right where another interval ends - ```[[1, 2], [2, 3]]```
## Techniques

### Sort the array of intervals by its starting point
A common routine for interval questions is to sort the array of intervals by each interval's starting value. This step is crucial to solving the [Merge Intervals]() question.

### Checking if two intervals overlap
Be familiar with writing code to check if two intervals overlap.
```java def is_overlap(a, b):
  return a[0] < b[1] and b[0] < a[1]
  ```

  ### Merging two intervals
```java def merge_overlapping_intervals(a, b):
  return [min(a[0], b[0]), max(a[1], b[1])]
  ```

## Essential questions
These are essential questions to practice if you're studying for this topic.

- Merge Intervals
- Insert Interval
 ### Recommended practice questions
These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- Non-overlapping Intervals
- Meeting Rooms (LeetCode Premium)
- Meeting Rooms II (LeetCode Premium)