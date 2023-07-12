// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    var sum = 0;
    for (i = 0; i<x.length; i++) {
      sum += Number(x[i]); /* Number() is a built in javascript method that attempts to convert the value it is given to the type of number. So x[i] is basically saying "look in the array named x then at the value at position i" which in this case is increasing because of the for loop. So to sum up : Number(x[i]) = "try to convert the value in array x at position i to a number". */
    }
    return sum;
}