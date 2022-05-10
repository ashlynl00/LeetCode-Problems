/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sumArray = [0];
    
    for (let i=0; i<nums.length; i++) {
        this.sumArray[i+1] = nums[i] + this.sumArray[i];
    };
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sumArray[right+1]-this.sumArray[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */