/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
    const counting = nums.reduce((count, num) => {
        count[num] = (count[num] || 0) + 1;
        return count;
    }, {});

    return Number(Object.keys(counting).find(key => counting[key] === 1));
};