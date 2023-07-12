export default class util{
    // Util function
    timeIt(task, start) {
        console.log(`${task} took ${Date.now() - start}ms`);
    }

    populateWithData(ds, totalSize){
        let count = 0;
        while(count < totalSize){
            ds.add(Math.round(Math.random() * totalSize));
            count++;
        }
        return ds;
    }
}