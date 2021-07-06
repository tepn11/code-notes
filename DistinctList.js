function DistinctList(arr) { 

    // code goes here  
    arr
    const hashCounter = {};
    let dupCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element
        if (hashCounter[arr[i]]) {
            dupCounter += 1
        } else {
            hashCounter[arr[i]] = 'found'
        }
    }
    dupCounter

    return dupCounter; 
}

a = DistinctList([1,2,2,2,3])
a

a = DistinctList([0,-2,-2,5,5,5])
a

a = DistinctList([100,2,101,4])
a

a = DistinctList([0,0,1,-1,-1,-1,1])
a