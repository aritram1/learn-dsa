let util = {
    // Util function
    logTime(task, then) {
        console.log(`${task} took ${Date.now() - then}ms`);
    }
}
module.exports = util;