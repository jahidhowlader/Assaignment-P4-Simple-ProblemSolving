// Problem 1: Let’s play a mind game

function mindGame(positiveNumber) {
    if (typeof positiveNumber !== 'number') {
        return 'Input can only take numbers, so please try again a positive integer number'
    } else if (positiveNumber < 0) {
        return 'Input can only take positive numbers, so please try again a positive integer number'
    } else if (!Number.isInteger(positiveNumber)) {
        return 'Input can only take integer number, so please try again a positive integer number'
    } else {
        return (((positiveNumber * 3) + 10) / 2) - 5
    }

}

// console.log(mindGame(5));
// console.log(mindGame('50'));
// console.log(mindGame(-2));
// console.log(mindGame(2.3));




// Problem 2: Finding even or odd
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

// console.log(evenOdd('Phero'));
// console.log(evenOdd('Batch7'));
// console.log(evenOdd('chatgpt'));


//  Problem 4: Finding Bad data
function findingBadData(arr) {
    return typeof Array.apply(arr)
}

// console.log(findingBadData([1,2]));





// Problem 5: Convert your gems into diamond
function gemsToDiamond(first, second, third) {
    if ((typeof first !== 'number') || (typeof second !== 'number') || (typeof third !== 'number')) {
        return 'Input can only take numbers, so please try again a positive integer number'
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

// console.log(gemsToDiamond(1, 1));
// console.log(gemsToDiamond(20, '200', 50));
// console.log(gemsToDiamond(100, 5, 1));