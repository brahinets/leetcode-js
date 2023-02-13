/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];

    let sum = 0;
    for (let num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
};