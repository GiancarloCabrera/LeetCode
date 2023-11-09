
// 5. Search Insert Position
// 	We have an array of numbers and a target; If there is a value of the array with the same number as the target we have to return its postion.
// 	If there is no a same value as the target, we have to return the position where that target is supposed to be located in the array.
// 	Remember the array is organized from the smallest to largest number.
// 	This is the code: 

    var searchInsert = function(nums, target) {
        for(let i = 0; i < nums.length; i++){
            if(nums[0] > target){
                return 0;
            }
            if(nums[i] == target){
                return i;
                break;
            }

            if(nums[i] < target && nums[i + 1] > target){
                return i + 1;
            }

            if(nums[nums.length - 1] < target){
                return nums.length;
            }
        } 
    };
