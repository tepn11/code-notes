function solution(A) {
    A
    let counter = 0
    const numHash = {}

    for (i=0; i < A.length; i += 1) {
        i
        if (!numHash[A[i]]) {
            numHash[A[i]] = true;
            counter += 1
        }
        numHash
        counter
    };
    counter
    return counter
}