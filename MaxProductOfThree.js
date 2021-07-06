function solution(A) {
    A
    let maxProduct;
    A.sort()
    // A
    // maxProduct = A[A.length - 3] * A[A.length - 2] * A[A.length - 1]
    // maxProduct
    for (let i = 0; i < A.length; i++) {
        a = A[i]
        b = A[i + 1]
        c = A[i + 2]

        if (a < 0 && b < 0 && A[A.length - 1] > 0) {
            product = a * b * A[A.length - 1]
            product
        } else {
            product = a * b * c
            product
        }
        if (maxProduct === undefined || maxProduct < product) maxProduct = product 
    }
    // maxProduct = A[A.length - 3] * A[A.length - 2] * A[A.length - 1]
    return maxProduct
}

// 100%
// function solution(A) {
//     let sorted = A.sort((a, b) => b - a);
//     let max = sorted[0] * sorted[1] * sorted[2];
//     if ((sorted[sorted.length - 1] < 0) && (sorted[sorted.length - 2] < 0)) {
//         let negativeTotal = sorted[sorted.length - 1] * sorted[sorted.length - 2] * B[0];
//         max = Math.max(max, negativeTotal);
//     }
//     return max;
// }