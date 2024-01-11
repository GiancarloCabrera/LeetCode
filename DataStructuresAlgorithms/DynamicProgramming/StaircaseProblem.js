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

// ANOTHER SOLUTION USING DYNAMIC PROGRAMMING
function numOfWaysDynamicProg(n) {
  // Lets create an array and its size will be n and fill it with 0
  let arr = new Array(n + 1).fill(0);
  // let arr = [];
  // We know the first two is only possible to do on step 
  arr[0] = 1;
  arr[1] = 1;

  // Now lets loop it, remeber we need to start from 2, beacuse the ones before are 1
  // And we need them to calculate from the beggining
  for (let i = 2; i < arr.length; i++) {
    console.log('HOW IT IS: ', arr);
    console.log(arr[i]);

    arr[i] = arr[i - 1] + arr[i - 2];
    console.log('ITEM UPDATED WITH FORMULA: ', arr);

    // NOWWWW, WE ACTUALLY JUST NEED TO STORE THE LAST 2 ELEMENTS
    // WE CAN DELETE THE ONES BEFORE, WE DONT NEED THEM.
    arr.splice((i - 2), 1)
    console.log('DELETED ITEM: ', arr);

    // REMEMBER, DELETING AN ITEM MODIFES THE LENGTH OF THE ARRAY
    // SO WE NEED TO SET i WHERE IT WAS, WE NEED TO MOVE IT ONE POSITION BACK
    // BEACUSE WHEN WE DELETE AN ITEM, IT WAS MOVED ONE RIGHT ACCIDENTALLY AND THAT WILL MAKE US LOOSE
    // THE REAL INDEX WE HAVE -----> MOVE INDEX ONE POSITION BACK, BECUASE WE DELETED ONE
    i--;
    console.log('POSITION UPDATED: ', arr[i]);
    console.log('LAST ARRAY: ', arr);

  }

  console.log(arr);
  return arr[1];
}

numOfWaysDynamicProg(5);

// Now we have the same problem, but in this case the user will tell us how many steps we can take on the stair
// x = {1,3,5} ---> Steps
// n = 4 ---> Stairs

// Dynamic programming 
function numOfWaysWithMoreStepsDynamic(n, x) {
  // Lets use an array to save every value
  const arr = new Array(n + 1).fill(0); // We set n + 1, because if we only set n, we will not include 0th step ---> n = 0, AND WE NEED IT
  // if n === 0 --> 1
  arr[0] = 1;
  console.log(arr);
  // Lets loop the created array, REMEMBER THIS ARRAY WIL STORAGE ON EACH POSITION THE POSSIbLE WAYS TO GET TO THE TOP IN THAT CASE
  //     step --> 0   1   2   3
  // EX:  arr = [ 1 , 1 , 2 , 4 ] ---> possible ways
  // i starts in 1 position
  for (let i = 1; i < arr.length; i++) {
    // This let will storage the result of each step
    let total = 0
    // Loop the array of steps x = [1,3,5] ---> remember we need to get this Formula -> F(n) = F(n-1) + F(n-3) + F(n-5)
    for (let j = 0; j < x.length; j++) {
      // This is to ensure we are not validating negative steps
      // Ex: 
      // i = 2 ---> REMEMBER i GIVES US THE STEP NUMBER WE HAVE AT THE MOMENT
      // x[j] = 3  ---> REMEMBER x[j] GIVES US THE NUM OF STEPS WE ARE ALLOWED TO TAKE AT A TIME 
      // if(2 - 3 >= 0) ---> 2 - 3 = -1 --> that is a negative step, so we do not count it
      // ITS LIKE THIS --> I HAVE A STAIR OF 2 STEPS, BUT I AM ONLY ALLOWED TO TAKE STEPS OF 3, IT IS IMPOSIBLEEEEE
      if (i - x[j] >= 0) {
        // So if we reached here, lets find how many ways I can get to the top based on the formula --> f(n-k)
        // Where n is the number of steps of the stair
        // And k is the number of steps I am able to take
        // HERE IS THE DYNAMIC PROGRAMMING ---> WE ARE USING CALCULATED VALUES TO SUMM TO OUR TOTAL
        // Ex: arr[2 - 1] ---> arr[1]
        // arr = [ 1 , 1 , 0 , 0 ] ---> arr[1] --> 1
        // total = 1
        total += arr[i - x[j]];
        // In simpler terms, this line is saying: "If you can take a step of size x[j] from the current step i, 
        // add the number of ways to reach the step you would be at after taking that step size to the total ways 
        // to reach the current step i."
      }
    }

    // And once we get the total ofways to get to the top of that stair, we just add the result to the position of the arr
    arr[i] = total;
  }
  console.log(arr);
  console.log('ANSWER: ', arr[n]);
  return arr[n];
}

numOfWaysWithMoreStepsDynamic(3, [1, 2, 5]);