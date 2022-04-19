/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let gSum = (nums.length * (nums.length +1))/2
    let nSum = nums.reduce((acc, currentValue)=>acc + currentValue, 0)
    let missingNum = gSum - nSum
    return missingNum;
};