function solution(A) {
    console.time("Time");
    let totalsum = 0;
    let minimalDiff;
    let P;
    let AleftSum = 0
    let ARightSum = 0
    N = A.length
    N
    P = 1
    console.time("Time for 1");
    for (i=0; i < N; i += 1) {
        i
        totalsum += A[i];
    }
    totalsum
    console.timeEnd("Time for 1");
    console.time("Time for 2");
    A
    for (i=0; i < N - 1; i += 1) {
        i
        AleftSum += A[i]
        AleftSum
        ARightSum = totalsum - AleftSum
        ARightSum

        diff = Math.abs(ARightSum - AleftSum )
        diff
        if (minimalDiff === undefined || diff < minimalDiff) minimalDiff = diff;
        minimalDiff
    }
    console.timeEnd("Time for 2");
    console.timeEnd("Time");
    return minimalDiff
}

num = 10000
numarr=[]
for (i=1; i<=num; i+=1) {
    numarr.push(1)
}
numarr

console.time("Time1");
ans = solution(numarr)
console.timeEnd("Time1");

