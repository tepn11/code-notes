function solution(A) {
    let previousPrice = null
    let lowestPrice = null
    let runningProft = 0
    let highestProfit = 0
    N = A.length
    for (let i = 0; i < N; i++) {
        if (previousPrice != null) {
            if (lowestPrice != null) {
                lowestPrice = min3(lowestPrice, previousPrice, A[i])
            } else {
                lowestPrice = min2(previousPrice, A[i])
            }
            runningProft = max(0, A[i] - lowestPrice)
            highestProfit = max(highestProfit, runningProft)
        }
        previousPrice = A[i]
    }
    return highestProfit
}

function max(val, val2) {
    return val < val2 ? val2 : val
}

function min2(val, val2) {
    return val < val2 ? val : val2
}

function min3(val, val2, val3) {
    lowest = val < val2 ? val : val2
    lowest = min2(lowest, val3)
    return lowest
}