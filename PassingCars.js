function solution(A) {
    A
    N = A.length
    N
    highestPairsCount = 0
    currentPairs = 0
    // reverse the array
    // count the pairs count and current
    // everytime encounters 0, add the highest, while current retains
    i = N - 1
    while (i >= 0) {
        i
        val = A[i]
        val
        if (val === 0) {
            highestPairsCount
            highestPairsCount = highestPairsCount + currentPairs
            highestPairsCount
        } else {
            currentPairs += 1
        }
        currentPairs
        
        i -= 1
    }
    currentPairs
    highestPairsCount
    if (highestPairsCount > 1000000000) return -1
    return highestPairsCount
}
