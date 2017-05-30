function greatestOfThree(){
	var i , temp; 					//i = variable used in for loop, temp = temporary variable used to store the value of the argument array
	var len = arguments.length;		//length of the arguments array , arguments is an inbuilt array of the function

	//console.log("Elements of arguments " + arguments);	//prints the contents of the array

	 for (i=0; i<len ;i++){
	 		if(arguments[i] > arguments[i+1]){	//checks if element at index i > element at index i+1
	 			
	 			//below lines swap the content at index i and i+1 so that greatest number will be located at the end of array
	 			temp = arguments[i];			//temp stores the content at index i
	 			arguments[i] = arguments[i+1];
	 			arguments[i+1] = temp;
	 		}
	 }

	 console.log("Greatest of the three numbers is : " +  arguments[len-1]);
}

greatestOfThree(24,16,3);