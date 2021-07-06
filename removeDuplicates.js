var removeDuplicates = function(nums) {
    nums
    let currentNum = null
    let currentIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        element
        if (currentNum === null) {
            i
            currentNum
            currentNum = nums[i];
        } else if (currentNum !== nums[i]) {
            i
            currentNum
            currentNum = nums[i]
            currentIndex += 1
            currentIndex
            nums[currentIndex] = currentNum
            nums
        }
        x = nums[i]
        x
    }
    nums
    return currentNum !== null ? currentIndex + 1 : 0
};