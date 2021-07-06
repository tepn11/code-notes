function solution(N) {
  // convert n to binary string
  const binaryString = N.toString(2);
  binaryString;
  let maxCount = 0;
  let counter = 0;
  // loop thru the entire string
  for (i = 0; i < binaryString.length; i += 1) {
    // if the current value is 1
    if (binaryString[i] === "1") {
      //  if counter greater than maxCount
      if (counter > maxCount) {
        // save the counter value to the max count
        maxCount = counter;
      }
      // reset counter to 0
      counter = 0;
    } else {
      // if the current value is 0
      counter += 1;
      // increment the counter
    }
  }
  return maxCount;
}

ans = solution(2147483647);
ans;
