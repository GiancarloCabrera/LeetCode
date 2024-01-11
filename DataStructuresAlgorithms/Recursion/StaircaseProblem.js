// Staircase Problem

// We have a stair which has n steps
// So i n = 4, it means that from the bottom to the top are 4 steps
// From the bottom we have to reach the top, the only rule is we can move 1 or steps at a time
// So we need a function to know based on n, how many ways we can reach the top by moving 1 or 2 steps

// Ex: n = 4
// n = 4, so we have a stair of 4 steps, now we have to know how many ways we can reach the top
// knowing we can take steps of 1 or 2.
//             _____
//          __|
//       __|
//    __|
// __|

// This is a solution, but there is a problem
function numOfWays(n) {
  // First, if n = 0 or n = 1, the answer is 1, because there is only one way to reach that number
  if (n === 0 || n === 1) {
    return 1
  } else {
    // If not, then we do our recursion until reaching that number
    return numOfWays(n - 1) + numOfWays(n - 2)
  }
}

// Just imagine n = 4, the recursion process would be something like this
// Formula -> F(4) = F(3) +  F(2)

//        f(4)
//        /  \
//     f(3)  f(2)
//     /  \
//  f(2) f(1)

// f(2) IS REPEATED, SO OUR FUNCTION IS CALCULATING VALUES THAT ALREADY DID

// THE SOLUTION IS TO USE MEMOIZATION TO SAVE THE ALREADY CALCULATED VALUES
function numOfWaysWithMemo(n, memo = {}) {
  if (n === 0 || n === 1) {
    return 1
  }
  // Lets check if we already calculated n
  // the value we already had storaged here
  // memo is an obj to save the results already calculated
  else if (memo[n]) {
    // If we find the value in the obj, it mean we already calculated it, so we return
    return memo[n]
  }
  else {
    // If we reach here, it means the value is not in memo, so me calculate it and save it in memo
    memo[n] = numOfWays(n - 1, memo) + numOfWays(n - 2, memo)
    // If not, then we do our recursion until reaching that number
    console.log(memo[n]);
    return memo[n]
  }
}

// Now we have the same problem, but in this case the user will tell us how many steps we can take on the stair
// x = {1,3,5} ---> Steps
// x = 4 ---> Stairs

// Recursivity
function numOfWaysWithMoreSteps(n, x) {
  let total = 0;
  // It works undeer same rule if its 0 steps
  if (n === 0) {
    return 1;
  } else {
    // Now from the rule we have, it is just to apply the same
    // x = [1,3,5]
    // Formula -> F(n) = F(n-1) + F(n-3) + F(n-5)
    // That is the formula we need to get on code

    // First we need to use var which will have the total of the operation
    for (let i = 0; i < x.length; i++) {
      // We only need values that are greater than 0 to calculate f(n)
      // n - i => 0  ----> It could happen that the result is negative, and we cannot do it
      console.log(n - i);
      if ((n - x[i]) >= 0) {
        total += numOfWaysWithMoreSteps(n - x[i], x);
      }
    }
  }
  console.log('total: ', total);
  // Remember we need to return something to make work the recursivity
  return total;
  // ON EVERY POSSIBLE CASE WE HAVE TO RETURN SOMETHING
}

numOfWaysWithMoreSteps(3, [1, 3, 5])