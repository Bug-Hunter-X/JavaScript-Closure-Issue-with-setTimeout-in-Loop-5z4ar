# TypeScript Closure Bug

This repository demonstrates a common closure issue in JavaScript when using `setTimeout` within a loop. The problem arises because the `setTimeout` callback function references the variable `i`, which is updated after each iteration of the loop.  This leads to all callbacks logging the final value of `i` instead of the value at the time of each iteration.

## Bug Description
The `printNumbers2` function attempts to print numbers 1 through 5 with a 1-second delay between each number. Due to the closure issue, it instead prints '6' five times because the loop has already completed by the time the `setTimeout` callbacks execute.

## Solution
The solution involves creating a closure for each iteration of the loop using an immediately invoked function expression (IIFE) or a more modern approach using `let` within the loop to create block scope.

## How to Reproduce
1. Clone this repository
2. Navigate to the directory
3. Run `tsc bug.ts` to compile the code
4. Run `node bug.js` to observe the unexpected output
5. Run `tsc bugSolution.ts` to compile the fixed code
6. Run `node bugSolution.js` to see the expected output