function fibR(n){
    if(n>30) return; // throw Error('too large number! maxm is 30');
    if(n <=1) return n;
    return fibR(n-1) + fibR(n-2);
}

let calculated = {};
function fibRM(n) {
    let result;
    if (n <= 1) {
        calculated[n] = n;
        result = calculated[n];
    } 
    else {
        calculated[n-1] = calculated[n-1] ?? fibRM(n-1);
        calculated[n-2] = calculated[n-2] ?? fibRM(n-2);
        result =  calculated[n-1] + calculated[n-2];
    }
    // console.log(`calculated=> ${JSON.stringify(calculated)}`);
    return result;
}

function fibI(n){
    let last2last = 0, last = 1,current;
    for(let i=2; i<=n; i++){
        current = last2last + last;
        last2last = last;
        last = current;
    }
    return current;
}

console.clear();
n=31;
console.log(`Calculating Fibonacci series for ${n} elements..`);
console.time();
console.log(`FibonacciI(${n}) => ${fibI(n)}`);
console.timeEnd();
console.time();
console.log(`FibonacciRM(${n}) => ${fibRM(n)}`);
console.timeEnd();
console.time();
console.log(`FibonacciR(${n}) => ${fibR(n)}`);
console.timeEnd();
