function solution(N, S, T) {
    N
    S
    T
    numberOfAdditionDwarves = -1
    addedDwarvesRunningTotal = 0
    highestOccupancyCount = 0
    highestOccupancyQuadrant = null
    // convert strings to arrays
    barrelPositions = S.split(" ")
    barrelPositions.sort()
    barrelPositions
    dwarvesPositions = T.split(" ")
    dwarvesPositions.sort()
    dwarvesPositions
    // barrelPositions.for
    // map letters to numbers
    lettersArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    lettersArray
    lettersMapping = lettersArray.map((letter, i) => {
        return { [letter]: i + 1 }
    })
    lettersMapping
    // convert positions to two dimension array
    barrelPositions2D = []
    barrelPositions.forEach(pos => {
        pos
        if (pos) {
            y = pos.substring(pos.length, 1)
            y
            y = lettersArray.indexOf(y) + 1
            y
            x = Number(pos.slice(0, -1))
            x
            xy = []
            xy.push(x)
            xy.push(y)
            barrelPositions2D.push(xy)
        }
    })
    barrelPositions2D
    dwarvesPositions2D = []
    dwarvesPositions.forEach(pos => {
        pos
        if (pos) {
            y = pos.substring(pos.length, 1)
            y
            y = lettersArray.indexOf(y) + 1
            y
            x = Number(pos.slice(0, -1))
            x
            xy = []
            xy.push(x)
            xy.push(y)
            dwarvesPositions2D.push(xy)
        }
    })
    dwarvesPositions2D
    // divide the quadrants and map
    Q1 = {d: 0, pos:[]}
    Q2 = {d: 0, pos:[]}
    Q3 = {d: 0, pos:[]}
    Q4 = {d: 0, pos:[]}
    
    for (let i = 0; i < N; i++) {
        i
        for (let j = 0; j < N; j++) {
            j
            // Q1
            if (i < Math.floor(N / 2) && j < Math.floor(N / 2)) {
                i
                j
                barrelPositions2D.forEach(pos => {
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        Q1.pos.push(`${pos[0]}, ${pos[1]}`)
                    }
                })
                dwarvesPositions2D.forEach(pos => {
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        Q1.pos.push(`${pos[0]}, ${pos[1]}`)
                        Q1.d += 1;
                    }
                })
                if (Q1.pos.length > highestOccupancyCount) {
                    highestOccupancyCount = Q1.pos.length
                    highestOccupancyQuadrant = 0
                }
            }
            // Q2
            if (i >= Math.floor(N / 2) && j < Math.floor(N / 2)) {
                i
                j
                barrelPositions2D.forEach(pos => {
                    pos
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        i
                        j
                        Q2.pos.push(`${pos[0]}, ${pos[1]}`)
                    }
                })
                dwarvesPositions2D.forEach(pos => {
                    pos
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        Q2.pos.push(`${pos[0]}, ${pos[1]}`)
                        Q2.d += 1;
                    }
                })
                if (Q2.pos.length > highestOccupancyCount) {
                    highestOccupancyCount = Q2.pos.length
                    highestOccupancyQuadrant = 1
                }
            }
            // Q3
            if (i >= Math.floor(N / 2) && j >= Math.floor(N / 2)) {
                i
                j
                barrelPositions2D.forEach(pos => {
                    pos
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        i
                        j
                        Q3.pos.push(`${pos[0]}, ${pos[1]}`)
                    }
                })
                dwarvesPositions2D.forEach(pos => {
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        Q3.pos.push(`${pos[0]}, ${pos[1]}`)
                        Q3.d += 1;
                    }
                })
                if (Q3.pos.length > highestOccupancyCount) {
                    highestOccupancyCount = Q3.pos.length
                    highestOccupancyQuadrant = 2
                }
            }
            // Q4
            if (i < Math.floor(N / 2) && j >= Math.floor(N / 2)) {
                i
                j
                barrelPositions2D.forEach(pos => {
                    pos
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        i
                        j
                        Q4.pos.push(`${pos[0]}, ${pos[1]}`)
                    }
                })
                dwarvesPositions2D.forEach(pos => {
                    pos
                    if (pos[0] === i + 1 && pos[1] === j + 1) {
                        Q4.pos.push(`${pos[0]}, ${pos[1]}`)
                        Q4.d += 1;
                    }
                })
                if (Q4.pos.length > highestOccupancyCount) {
                    highestOccupancyCount = Q4.pos.length
                    highestOccupancyQuadrant = 3
                }
            }
        }   
    }
    Q1
    Q2
    Q3
    Q4
    // get the quadrant with highest occupancy
    highestOccupancyQuadrant
    highestOccupancyCount
    // go thru each quadrant except the highest occupancy to determine the how much more we can add
    // Q1
    square = []
    square.push(Q1,Q2,Q3,Q4)
    square

    let n = 0
    i = highestOccupancyQuadrant ? highestOccupancyQuadrant : 0
    maxDwarvesPerQuadrant = null

    while (n < 4) {
        n
        i
        
        if (square[i].pos.length < N) {
            if (!maxDwarvesPerQuadrant) {
                dwarvesToAdd = N - square[i].pos.length
                maxDwarvesPerQuadrant = square[i].d + dwarvesToAdd
            } else {
                if (square[i].d < maxDwarvesPerQuadrant) {
                    dwarvesToAdd = maxDwarvesPerQuadrant - square[i].d
                }
            }
            addedDwarvesRunningTotal += dwarvesToAdd
        }
        maxDwarvesPerQuadrant
        addedDwarvesRunningTotal
        

        if (i >= 3) i = 0
        else i += 1
        n += 1
    }

    addedDwarvesRunningTotal
    return addedDwarvesRunningTotal
}
