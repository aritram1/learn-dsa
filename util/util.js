export default class util{
    // Util function
    timeIt(task, start) {
        console.log(`${task} took ${Date.now() - start}ms`);
    }
}