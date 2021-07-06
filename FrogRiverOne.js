function solution(X, A) {
    X
    A
    let counter = 0
    let timeIndex = -1
    const leafHash = {}

    for (i=0; i < A.length; i += 1) {
        i
        if (!leafHash[A[i]]) {
            leafHash[A[i]] = true;
            counter += 1
        }
        leafHash
        counter
        if (counter === X) {
            timeIndex = i;
            break
        }
    };
    counter
    timeIndex
    return timeIndex
}
