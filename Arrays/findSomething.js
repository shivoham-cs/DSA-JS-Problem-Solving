// Find the largest (or smallest) number in an array.

// Find largest ----------------------------------------------

let arr = [5,2,9,1,7]

// Way 1
let largestNum = Number.MIN_SAFE_INTEGER

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
        largestNum = arr[i];
    }
}

console.log(largestNum);

// Way 1 wrapped in a function

function findLargestNum (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i];
        }
    }

    return largestNum;

}

let anotherArr = [25,26,32,65,48,98,88]
console.log(findLargestNum(anotherArr))

// Way 2 (not ideal for dsa)
console.log(arr.sort().slice(arr.length - 1).toString())

// Find smallest ----------------------------------------------

// Way 1
function findSmallest (arr) {
    let smallestNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }

    return smallestNum;

}

console.log(findSmallest(anotherArr))

// Way 2 (not ideal for dsa)

console.log(anotherArr.sort().reverse().slice(anotherArr.length - 1).toString())


// Find both (smallest & largest)

function getTwoNum (arr) {

    // if array is empty - safty check

    if (arr.length === 0) {
        return `Array is empty`;
    }
    
    let smallestNumber = Number.MAX_SAFE_INTEGER;
    let largestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < smallestNumber) {
            smallestNumber = arr[i];
        }

        if (arr[i] > largestNumber) {
            largestNumber = arr[i];
        }
    }

    return `Smallest number: ${smallestNumber} & Largest number: ${largestNumber}`;

}

let anoArr = [25,26,32,65,48,98,88];
let emptyArr = [];
console.log(getTwoNum(anoArr));
console.log(getTwoNum(emptyArr));