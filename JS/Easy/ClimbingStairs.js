// 70. Climbing Stairs
// Companies
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 

// Constraints:

// 1 <= n <= 45

// Algorithm ---> f(n) = f(n-1) + f(n-2)

//  We have to use RECURSION to solve this problwm
var climbStairs = function(n) {
    // Memoization is a way to potentially make functions that use recursion run faster.
    // It is used to save theresult partially in cache, it is faster.
    // The main purpose is to avoid doing the same work twice or more
    // Check this article for better understanding
    // https://dev.to/ionabrabender/memoization-and-recursion-228f
    let memo = {}

    const count = function(k) {
        console.log(memo);
        // We can check if we've already performed a calculation using the given input.
        // If we have, we can simply return that result.
        if (memo[k]) return memo[k];
        if (k === 2) return 2;
        if (k === 1) return 1;
        // Recursion ---> we are storing that inpput and result for future use
        // so if we already did it, we wont need to do the calculation again
        memo[k] = count(k-1) + count(k-2);
        console.log(memo[k]);
        return memo[k]
    }

    return count(n);
};

// climbStairs(2);
// climbStairs(3);
climbStairs(5);