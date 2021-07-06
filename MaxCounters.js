function solution(N, A) {
    N
    A
    let counter = {}
    let highestMax = 0
    let lastMax = 0
    for (let i = 1; i <= N; i++) {
        i
        counter[i] = 0
    }
    counter
    A.forEach(n => {
        n
        counter
        if (n <= N) {
            if (counter[n] < highestMax) {
                counter[n] += highestMax + 1
            } else {
                counter[n] += 1
            }
            lastMax = Math.max(lastMax, counter[n])
        } else {
            highestMax = lastMax
        }
        
    })
    counter
    for (let i = 1; i <= N; i++) {
        i
        if (counter[i] < highestMax) counter[i] = highestMax
        // counter[i] = highestCounter
    }
    lastMax
    highestMax
    counter
    counter = Object.values(counter)
    return counter
}