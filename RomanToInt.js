var romanToInt = function(s) {
    const mapping = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    
    const numArr = s.split('');
    let total = 0;
    let previousNum = null;
    numArr
    numArr.forEach(n => {
        n
        total += mapping[n] 
        total
        if (previousNum !== null && mapping[n] > previousNum) {
            previousNum
            total
            total -= previousNum * 2
        }
        previousNum = mapping[n]
        previousNum
    });

    return total
}