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

// Finding second largest number in array.

function findSecondLargest (arr) {

    //  Check for empty arry
    if (arr.length === 0) {
        return "Array is empty."
    }

    //  Check for Single element in array
    if (arr.length === 1) {
        return `Only one element in array, can't have second largest number.`
    }

    // Check for all same values of elemens
    let allSame = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            allSame = false;
            break;
        }
    }

    if (allSame) {
        return "All elements are same.";
    }

    let largest = Number.MIN_SAFE_INTEGER;
    let secondLargest = Number.MIN_SAFE_INTEGER;

    for ( let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }

        if ( arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;

}

console.log("------------------------")

console.log("secondLargest:", findSecondLargest([5, 12, 8, 20, 15]));
console.log("secondLargest:", findSecondLargest([10, 5, 8]));
console.log("secondLargest:", findSecondLargest([5, 20, 15]));
console.log("secondLargest:", findSecondLargest([20, 15, 5]));
console.log("secondLargest:", findSecondLargest([5, 5, 5]));
console.log("secondLargest:", findSecondLargest([5]));
console.log("secondLargest:", findSecondLargest([]));
console.log("secondLargest:", findSecondLargest([5, 5, 8, 5]));



// Finding second smallest number in array.

function findSecondSmallest (arr) {

    //  Check for empty arry
    if (arr.length === 0) {
        return "Array is empty."
    }

    //  Check for Single element in array
    if (arr.length === 1) {
        return `Only one element in array, can't have second largest number.`
    }

    // Check for all same values of elemens
    let allSame = true;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            allSame = false;
            break;
        }
    }
    
    if (allSame) {
        return "All elements are same.";
    }

    let smallestN = Number.MAX_SAFE_INTEGER;
    let secondSmallestN = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if (smallestN > arr[i]) {
            smallestN = arr[i];
        }

        if (smallestN < arr[i] && secondSmallestN > arr[i] ){
            secondSmallestN = arr[i];
        }
    }

    return secondSmallestN;

}

console.log("secondSmallest:", findSecondSmallest([5, 12, 8, 20, 15]));
console.log("secondSmallest:", findSecondSmallest([2, 2, 3, 4]));