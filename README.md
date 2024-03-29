# Problem Set: Recursion

## Short Response Questions

Do them first!

## Coding Exercises

**Use <u>Recursion</u> to solve the following problem (unless otherwise stated).**

### 1 - Calculate Total Sum: 
This interview question requires you to return the running total or sum. Make sure to think of the base case here and make sure you use recursion to accomplish this! Do not use iteration.

```js
getTotal([1, 2, 3])    // 6
getTotal([2, 4, 6])    // 12
getTotal([2, 2, 2, 2]) // 8
getTotal([])           // 0
```

### 2 — Reverse a String:

This interview question requires you to reverse a string using recursion. Make sure to think of the base case here and make sure you use recursion to accomplish this! Do not use iteration.
```js
reverse('recursion!') // !noisrucer
reverse('madam')      // madam
```

### 3 — Fibonnaci Sequence:

Implement a Fibonnaci Sequence in two different ways - iteratively (using a `for`/`while` loop) and recursively. 

* Remember the fibonacci sequence `0,1,1,2,3,5,8,13,21,...`. Each number is generated by taking the previous two numbers and adding them together.
* For the purpose of this assignment, the `0th` number is `0` and the `1st` number is `1`. 
* Your function should take in a number `n` and return the `nth` number in the Fibonnaci Sequence. 
* For example, the `fibIter` function should behave like this:

```js
fibIter(0) // returns 0
fibIter(1) // returns 1
fibIter(2) // returns 1
fibIter(3) // returns 2
fibIter(4) // returns 3
fibIter(5) // returns 5
fibIter(6) // returns 8
fibIter(7) // returns 13
```

* `fibRec` should behave the same way!

### 4 — Binary Search:

Write a recursive function called `binarySearch` that takes in two parameters: and array `arr` and a number `target` to find in the array. The function returns the index of `target` in the array `arr`, or `-1` if it can't find `target`.

> Hint: This function may also require other parameters. Look it up!

For Example:
```js
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const target1 = 8;
const target2 = 12;
const target3 = 7;

console.log(binarySearch(arr, target1)); // 3: index of target1 in arr)
console.log(binarySearch(arr, target2)); // 5: index of target2 in arr)
console.log(binarySearch(arr, target3)); // -1: target3 not found in arr
```

In these examples:

- We have a sorted array `arr`.
- We're searching for three different targets: `target1`, `target2`, and `target3`.
- The first two calls find the targets (`8` and `12`) in the array and return their respective indices.
- The third call searches for `7`, which is not present in the array, so it returns `-1`.
