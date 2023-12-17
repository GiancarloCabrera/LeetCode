// Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Ex 1: 
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Ex 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Ex 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false

// Constraints:

// The number of nodes in both trees is in the range [0, 100].
// -10^4 <= Node.val <= 104

// THis is the structure of a node of a binary tree

// Node class
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var isSameTree = function(p, q) {
    // So first of all we are going to validate that each binary tree actually is not null
    if (p === null && q === null) {
        // Beacuse both are the same
        return true
    }


    // If one of them is null and the other is not, then we return false
    if (p === null || q === null) {
        return false;
    }

    // Now we validate the actual value of the actual node is the same to the another of the another binary tree
    if (p.val !== q.val) {
        return false;
    }

    // BUT, HOW DO WE VALIDATE EACH NODE AND HOW DO WE KNOW WHICH NODE TO VALIDATE WHICH NODE?
    // WELL, WE ARE GOING TO USE RECURSIVITY, WHERE WE WILL TAKE THE LEFT PATH AND RIGHT PATH
    // LIKE THIS

    //         THIS IS LEFT PATH            THIS IS RIGHT PATH
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    //WE USE &&, BEACUSE WE NEED BOTH PATHS TO BE TRUE, IF THEY ARE NOT THEN WE RETURN FALSE
    // BECAUSE THE MEANS ONE THE NODES OF LEFT OR RIGHT PATH ARE NOT THE SAME
};

isSameTree([1,2,3], [1,2,3]);
isSameTree([1,2], [1,null,2]);
