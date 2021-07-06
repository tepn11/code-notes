function solution(A) {
    A
    N = A.length
    N
    count = 0
    runningSum = sum
    // runningSum
    // start from end 
    for (let i = 0; i < N; i++) {
        i
        for (let j = 1; j <= N; j++) {
            j
            x = A[i]
            x
            y = A[j]
            y
            if (i != j && isInRange(i - A[i], i + A[i], j - A[j])) {
                z = i - A[i]
                z
                z = i + A[i]
                z
                z = j - A[j]
                z
                count += 1
                count
                if (count > 10000000) return -1
            }
        }
        
    }
    count
    return count
}

function isInRange(A, B, X) {
    A
    B
    X
    return A <= X && X <= B
}