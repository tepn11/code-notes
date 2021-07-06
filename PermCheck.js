function solution(A) {
    if (A.length === 1 && A[0] === 1) return 1
    N = A.length
    N
    hashNums = {}
    sum = 0
    arrayBasedOnN = []
    for (let i = 0; i < N; i++) {
        arrayBasedOnN.push(i + 1)
    }
    arrayBasedOnN
    expectedSum = prefixSum(arrayBasedOnN)
    expectedSum
    for (let i = 0; i < N; i++) {
        if (!hashNums[A[i]]) {
            sum += A[i]
            hashNums[A[i]] = true
        }
    }
    sum
    if (sum === expectedSum) {
        return 1
    } else {
        return 0
    }
}

function prefixSum(A) {
    n = A.length;
    P = []
    A.forEach(element => {
        P.push(0)
    });
    P
    for (let i = 1; i < A.length + 1; i++) {
        const element = A[i];
        element
        P[i] = P[i - 1] + A[i - 1]
    }
    P
    return P[P.length - 1]
}