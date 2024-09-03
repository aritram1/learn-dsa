// The following program tries to solve sliding window type problem with brute force and using the usual sliding window technique to deccrease time complexity to O(n)

// Util methods below
// A function to format and show the result
function formatResponse(maxSum, maxArray, maxArrayStartIndex, size){
    return JSON.stringify({
        'maxSum' : maxSum,
        'maxArray' : maxArray,
        'maxArrayStartIndex' : `${maxArrayStartIndex+1} - ${maxArrayStartIndex + size}`
    });
}

// Few functions to generate the input array

// 1 - a simple array
function generateSimpleArray(n){ return [1,-4,11,-9,3,-6,7,8,3,-1];}

// 2 - a random array with k elements, with `js` random() method
function generateRandomArray(n){
    let randomArray = new Array(size).fill(0).map(
        _ => {
            let value = Math.random();
            let positiveOrNegativeMultiplier = (value > 0.5) ? 1 : -1;
            return (positiveOrNegativeMultiplier * Math.round(value*1000));
        }
    );
    return randomArray;
}
// 3 - the worst case array where the result is known to be the last k elements in the array
function generateWorstCaseArray(n){
    let worstCaseArray = [];
    for(let i = 0; i < n; i++){
        worstCaseArray.push(i);
    }
    return worstCaseArray;
}

// main function to solve the problem with brute force (a loop running inside another loop)
function getMaxSumBrute(allData, size){
    let currentSum = 0, maxSum = 0, currentArrayStartIndex = 0, maxArrayStartIndex = 0;
    let currentArray = [], maxArray = [];
    for(let i = 0; i < allData.length-size+1; i++){
        currentSum = 0;
        currentArrayStartIndex = 0;
        currentArray = [];
        for(let j=i; j<i+size; j++){
            currentArray.push(allData[j]);
            currentSum = currentSum + allData[j];
            currentArrayStartIndex = j;
        }
        if(maxSum < currentSum){
            maxSum = currentSum;
            maxArray = currentArray;
            maxArrayStartIndex = currentArrayStartIndex - size;
        }
    }
    return formatResponse(maxSum, maxArray, maxArrayStartIndex, size);
}

// main function to solve the problem with sliding window technique
function getMaxSumSlidingWindow(allData, size){
    let maxSum = 0, currentSum = 0; currentArrayStartIndex = 0, maxArrayStartIndex = 0;
    let currentArray = [], maxArray = [];
    for(let i = 0; i<size; i++){ // Initial Calculation
        maxSum = maxSum + allData[i];
        currentSum = maxSum;
        // copy the array (removed to calculate raw time taken to precisely get only the required answer)
        // -- currentArray.push(allData[i]);
        // -- maxArray.push(allData[i]);
    }
    for(let i=1; i<allData.length-size+1; i++){
        let prev = allData[i-1];
        let current = allData[size+i-1];
        // copy the array (removed to calculate raw time taken to precisely get only the required answer)  
        // -- currentArray.shift();
        // -- currentArray.push(current);
        currentSum = currentSum + current - prev;
        if(maxSum < currentSum){
            maxSum = currentSum;
            // copy the array (removed to calculate raw time taken to precisely get only the required answer)  
            // -- maxArray = [...currentArray];
            maxArrayStartIndex = i-1;
        }
    }
    return formatResponse(maxSum, maxArray, maxArrayStartIndex, size);
}

// Following lines of code runs the program to compare two approaches of solving
console.clear();
let slidingSize = 1000;
let n = Math.pow(10,6);
console.log(`n is ${new Intl.NumberFormat('en-IN').format(n)} and window size => ${slidingSize}`);
let input = generateWorstCaseArray(n);  

console.time();
console.log('Result By Brute =>' , getMaxSumBrute(input, slidingSize));
console.timeEnd();
console.time();
console.log('Result by Sliding Window =>' , getMaxSumSlidingWindow(input, slidingSize));
console.timeEnd();


// Result in Chrome console
// With n = 10 ^ 6 and k = 1000
// By brute force method => default: 3714.715087890625 ms
// By Sliding Window => default: 4.190185546875 ms
// so, It's ~900 times faster than brute method 😉

// End of fun 😉
