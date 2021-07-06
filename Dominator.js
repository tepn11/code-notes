function solution(A) {
    let currentLeaderIndex = -1
    const numHash = {}
    if (A.length === 1) return 0;
    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        element
        if (!numHash[A[i]]) {
            numHash[A[i]] = 1;
        } else  {
            numHash[A[i]] += 1;
            if (numHash[A[i]] > A.length  / 2) {
                currentLeaderIndex  = i
            }
        }
    }
    numHash
    return  currentLeaderIndex
}