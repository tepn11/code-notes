function solution(A, B, K) {
    A
    B
    K
    let x = null
    if (A === 0 && B === 0) return 0
    numbersDivisible = 0
    for (let i = A; i <= B; i++) {
        i
        if (i > 0) {
            i
            x = i % K
            x
        }
        x
        if (x === 0) {
            i
            numbersDivisible += 1
        }
    }
    numbersDivisible
    return numbersDivisible
}