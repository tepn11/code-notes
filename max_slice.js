function quadratic_max_slice(A) {
    n = A.length
    n
    result = 0
    for (let i = 0; i < n; i++) {
        i
        sum = 0
        for (let j = i; j < n; j++) {
            j
            x = A[j];
            x
            sum += A[j]
            sum
            result = max(result, sum)
        }
        
    }
    return result
}

function golden_max_slice(A) {
    maxEnding = 0;
    maxSlice = 0;
    A
    for (let i = 0; i < A.length; i++) {
        maxEnding = max(0, maxEnding + A[i])
        maxEnding
        maxSlice = max(maxSlice, maxEnding)
        maxSlice
    }
    maxSlice
}

function max(val, val2) {
    return val < val2 ? val2 : val
}

ans = quadratic_max_slice([5,-7,3,5,-2,4,-1])
ans

ans = golden_max_slice([5,-7,3,5,-2,4,-1])
ans