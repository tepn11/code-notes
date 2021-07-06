
function solution(A) {
    let realTotal = 0;
    let expectedTotal;
    let missingNumber;
    n = A.length
    n
    if (n === 0) return 1;
    realn = n + 1
    expectedTotal = realn * (realn + 1) / 2
    A.forEach(i => {
        realTotal += i
    });
    missingNumber = expectedTotal - realTotal
    return missingNumber
}