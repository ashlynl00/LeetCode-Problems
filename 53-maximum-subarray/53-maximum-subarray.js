/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxCurrent = nums[0]
    let solution = nums[0];
    for (let i=1; i<nums.length; i++) {
        maxCurrent = Math.max(nums[i], nums[i]+maxCurrent);
        if (maxCurrent > solution) {
            solution = maxCurrent;
        }
    }
    return solution;
};