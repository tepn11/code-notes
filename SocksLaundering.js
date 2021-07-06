function solution(K, C, D) {
    K
    C
    D
    countPairs = 0
    matchClean = []
    unmatchSocksClean = {}
    unmatchClean = []
    unmatchSocksDirty = {}
    highestDirtyCount = 0
    for (let i = 0; i < C.length; i++) {
        x = C[i]
        x
        if (unmatchSocksClean[x]) {
            countPairs += 1;
            unmatchSocksClean[x] -= 1
        } else {
            unmatchSocksClean[x] = 1
        }
    }
    countPairs
    unmatchSocksClean
    for (let i = 0; i < D.length; i++) {
        x = D[i];
        x
        if (unmatchSocksClean[x] > 0 && K > 0) {
            x
            unmatchSocksClean
            countPairs += 1;
            unmatchSocksClean[x] -= 1
            unmatchSocksClean
            K -= 1
            K
            countPairs
        } else if (unmatchSocksDirty[x]) {
            K
            unmatchSocksDirty
            // if (unmatchSocksDirty[x] >= 2 && K >= 2) {
            //     countPairs += 1;
            //     unmatchSocksDirty[x] -= 2
            //     K -= 2
            // } else {
                // unmatchSocksDirty
            unmatchSocksDirty[x] += 1
            // }
        } else {
            unmatchSocksDirty
            unmatchSocksDirty[x] = 1
        }
    }
    countPairs
    while (K > 0) {
        K
        if (K >= 2) {
            unmatchSocksDirty
            Object.keys(unmatchSocksDirty).forEach(sock => {
                unmatchSocksDirty
                sock
                if (unmatchSocksDirty[sock] >= 2) {
                    unmatchSocksDirty
                    countPairs += 1;
                    unmatchSocksDirty[sock] -= 2
                    K -= 2
                    unmatchSocksDirty
                    highestDirtyCount = Math.max(unmatchSocksDirty[sock], highestDirtyCount)
                    highestDirtyCount
                }
            })
            if (highestDirtyCount < 2) {
                K = 0
            }
            K
        } else {
            K
            K = 0
        }
        K
        // K -= 1
    }
    unmatchSocksDirty
    unmatchSocksClean
    countPairs
    return countPairs
}