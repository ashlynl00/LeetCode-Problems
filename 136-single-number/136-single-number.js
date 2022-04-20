/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let resultsArray = [];
    if (nums.length == 1) {
        return nums[0]
    } else {
        for (let i=0; i<nums.length; i++) {
            let currentNum = nums[i];
            for (let j=i+1; j<nums.length; j++) {
                if (currentNum == nums[j]) {
                    resultsArray.push(currentNum);
                    resultsArray.push(nums[j])
                }
            }
        }
        let nSum = nums.reduce((acc, currentValue)=>acc+currentValue);
        let rSum = resultsArray.reduce((acc, currentValue)=>acc+currentValue);
        return nSum-rSum;
    }
};