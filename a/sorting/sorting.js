
let sortMethod = function(inp, f, debug=false){
    let swapped = 0, total = 0;
    for(let k=0; k<inp.length; k++){
        for(let i=0; i<inp.length-1; i++){
            if(f(inp[i],inp[i+1])){
                let temp = inp[i];
                inp[i] = inp[i+1];
                inp[i+1] = temp;
                swapped++;
            }
            total++;
            if(debug) console.log(`after k=${k}, i=${i}th run for size ${inp.length} : `, inp);
        }
        if(debug) console.log(`after k=${k}th run :`, inp);
    }
    return {'data' : inp, 'swapped' : swapped, 'total' : total};
}

// Driver function
let driver = function(debug = false){
    console.clear();
    let sample_size = 20;
    let result = [];
    for(let max=5; max<=sample_size; max++){
        let input = Array.from({'length' : max}, (v,index)=> parseFloat((100*Math.random()).toFixed(2)));
        if(debug) console.log(`input :`, input);
        let _sortFn = (a, b) => a > b;
        let sorted = sortMethod(input, _sortFn, debug);
        let efficiency = parseFloat(`${(100*sorted.swapped/sorted.total).toFixed(0)}`);      
        if(debug) console.log('Sorted Array :', sorted.data);
        if(debug) console.log('swapped :', sorted.swapped);
        if(debug) console.log('total', sorted.total);
        if(debug) console.log(`Efficiency (Swapped/Total) : ${efficiency}%`);
        result.push(efficiency);
    }
    let sorted = result.sort();
    console.log(`Avg. Efficiency : ${sorted[0]}%-${sorted[sorted.length-1]}%`);
};

driver();
