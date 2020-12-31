var maxSequence = function(arr){
  // ...
  if (arr.length === 0) {
    return 0
  } else {
  // initiate two variable, maxSum for total max, sum for current max
  let maxSum = -Infinity
  let currentSum = 0
  // iterate through the arr, store sub-problems result
  for(let i = 0; i < arr.length; i++){ 
    //cumulating answers to the top
    
    //compare currentSum add current number 
    //with current number and store the maximum value
    currentSum = Math.max(arr[i], currentSum + arr[i])
    
    //compare maxSum with currentSum and store the greater value
    maxSum = Math.max(currentSum, maxSum)
  }
  if (maxSum < 0) {
    return 0
  } else
    return maxSum
  }
}

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}