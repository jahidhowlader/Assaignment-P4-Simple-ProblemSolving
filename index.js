// Problem 1: Let’s play a mind game
/* 
This function is capable of inputting a positive number and performing a simple basic arithmetic operation. eg (((userInput*3) + 10)/2) - 5.

**NOTE: If the Arguments is not a number, then this function returns you 'Input can only take positive numbers, so please try again with a positive number'
*/

function mindGame(positiveNumber) {
    if (typeof positiveNumber !== 'number') {
        return 'Input can only take positive numbers, so please try again with a positive number'
    } else if (positiveNumber < 0) {
        return 'Input can only take positive numbers, so please try again with a positive number'
    } else {
        return (((positiveNumber * 3) + 10) / 2) - 5
    }
}







// Problem 2: Finding even or odd
/* 
This function accepts a string input and returns 'odd' or 'even'. Returns 'even' if the length of the arguments is even or returns 'odd' if the length of the arguments is odd.

**NOTE: If the Arguments is not a String, then this function returns you 'Input can only take string, so please try again...'
*/

function evenOdd(input) {
    if (typeof input !== 'string') {
        return 'Input can only take string, so please try again...'
    } else {
        if (input.length % 2 === 0) {
            return 'even'
        } else {
            return 'odd'
        }
    }
}







// Problem 3: Is Less or Greater than seven
/* 
This function accepts a number input and the function will perform a simple arithmetic operation on subtraction. The function will subtract 7 from the argument and return the result if the result is less than 7 and double the arguments if the operation result is greater than or equal 7.

**NOTE: If the Arguments is not a Number, then this function returns you 'Input can only take numbers, so please try again with a number'
*/

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Input can only take numbers, so please try again with a number'
    } else if (number < 7) {
        return number - 7
    } else {
        return number * 2
    }
}







//  Problem 4: Finding Bad data
/* 
This function accepts an Array input and returns How many bad data are there in total. by the way negative numbers are bad data.

**NOTE: If the Arguments is not a Array, then this function returns you 'Arguments is not an array'
*/

function findingBadData(arr) {
    let badData = 0
    if (!Array.isArray(arr)) {
        return 'Arguments is not an array'
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 0) {
                badData++
            }
        }
    }
    return badData
}






// Problem 5: Convert your gems into diamond
/* 
This function takes 3 inputs as arguments.
The first input will be multiplied by 21,
The second input will be multiplied by 32, 
The third input will be multiplied by 43 
Then addition 3 parameters like ((21 * first parameter) + (32 * second parameter) + (43 * third parameter)) and finally this function will return addition result but addition result is gretter than or equal 2000 then from result 2000 will be subtracted

**NOTE: If you don't give 3 arguments or the Arguments is not a number, then this function returns you 'Input can only take numbers, so please try again a positive number'
*/

function gemsToDiamond(first, second, third) {
    if ((typeof first !== 'number') || (typeof second !== 'number') || (typeof third !== 'number')) {
        return 'input can taks three arguments on numbers, so please try again a positive number'
    } else {
        const powerOfFirst = 21 * first
        const powerOfSecond = 32 * second
        const powerOfThird = 43 * third
        const totalDiamond = powerOfFirst + powerOfSecond + powerOfThird
        if (totalDiamond >= 2000) {
            return totalDiamond - 2000
        } else {
            return totalDiamond
        }
    }
}




