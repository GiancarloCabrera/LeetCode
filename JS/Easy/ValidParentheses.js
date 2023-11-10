//  Valid Parentheses
// 	It's a string wich i have to return true if the 1st value of th string is the same as its last one. If it's not then it has 
// 	to return false;
// 	This is the code which shows using a hashmap how to return false or true depending the case...
	
		//s = ()[]{};
		//s = (];
		var isValid = function(s) {
			//This hashmap contains the open parenthesis and thir closers
 			const hashmap  = {
       			"(": ")",
       			"[": "]",
       			"{": "}"
   			}
			
			//This array will contain the closer parenthesis if we find them...
   			let stack = [];
    			
    			for(let char of s){ //That's how we can iterate a string
        			console.log(char)
        			if(hashmap[char]){ //We compair if there is the value of char in our hashmap (char = "(", hashmap has a "(" );
            			stack.push(hashmap[char]); //If there is, we push the equivalent value into the array stack;
            			//stack = [)]
            			console.log("Hashmap: "+hashmap[char]);
        			}else if(stack.length > 0 && stack[stack.length - 1] == char){ //We ask if our array has a value and the last value is the same as char
            			console.log("hola")
            			stack.pop(); //If it is, then we delete that last value
        			}else{
        	    			return false //If none of those if work, it means an opened parenthesis wasn't closed in s
        			}
    			}
    			return stack.length == 0;  //At the end, if our array stack has a value, it means that the string has opened items which weren't closed FALSE. If stack's empty, means the 
								//string is correct. TRUE 
		}; 