// 4.Remove Element
// 	We have an array and a variable, if one of the values of the array is same as the variable, we have to delete that value.
// 		At the end of the program, we have to return the left values in our array.
// 		This is the function:
		
    var removeElement = function(nums, val) {
        for(let i = nums.length - 1; i >= 0; i--){
            if(nums[i] == val){
                nums.splice(i, 1); //This is how we delete a value in an array.
            //First is the position and 2nd is the number of values we want to delete... 
            }
        }
        return nums.length;
    };