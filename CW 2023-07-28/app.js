// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// My Solution

    function roundToNext5(n){
  // ...
  
    return Math.ceil(n / 5) * 5; // The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.
  
    }

let n = 2

// Other Solutions

    function roundToNext5(n){
        while(n % 5 !== 0) n++;
        return n;
    }

    //------------------------------------------------

    function roundToNext5(n){
        if (n % 5 === 0) {
        return n;
    }
        return roundToNext5(n + 1);
}