function solution(A) {
    A
    N = A.length
    N

    // sort
    A.sort((a,b) => a-b)
    A
    // start from end 
    i = N - 1
    i
    while (i >= 0) {
        i
        x = A[i]
        x
        y = A[i-1]
        y
        z = A[i-2]
        z
        if (z + y > x) {
            z
            y
            x
            return 1
        }
        i -= 1
    }
    return 0
}