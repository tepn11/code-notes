function solution(A, K) {
    let savedValue;
    let nextValue;
    if (A.length > 1) {
        for (i=1; i<=K; i+=1){
            for (j=0; j<A.length; j+=1 ) {
                if (savedValue === undefined) {
                    savedValue = A[j+1]
                    A[j+1] = A[j]
                } else {
                    nextValue = A[j+1]
                    if (nextValue !== undefined) {
                        A[j+ 1] = savedValue
                        savedValue = nextValue
                    } else {
                        A[0] = savedValue
                    }
                }
            }
        }
    }
    return A
}

ans = solution([3, 8, 9, 7, 6],3)

console.log(ans)