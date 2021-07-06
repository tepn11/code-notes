function solution(A) {
    A
    let missingNum = 1;
    const foundHash = {}

    for (i=0; i < A.length; i += 1) {
        i
        a = A[i]
        a
        missingNum
        if (!foundHash[A[i]]) {
            foundHash
            foundHash[A[i]] = true;
            while (foundHash[missingNum]) {
                missingNum += 1
            }
            missingNum
        }
    };
    missingNum
    foundHash
    return missingNum
}