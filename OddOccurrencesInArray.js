function solution(A) {
    const unpaired = {};
    // check A len 1 return A[0]
    if (A.length === 1) {
        return A[0];
    }
    // loop thru A
    A.forEach(i => {
        // if value was found in hashmap
        if (unpaired[i]) {
            // remove from hashmap
            delete unpaired[i]
        }
        // else
        else {
            unpaired[i] = true;
            // save value in hash map
        }
    });
    // only value left in hash map is the odd one
    return Number(Object.keys(unpaired)[0]);
}