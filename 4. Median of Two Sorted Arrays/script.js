/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
    let numbers = [...nums1, ...nums2]
        .sort((a, b) => a - b);

    if (numbers.length % 2 === 0) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        return numbers[Math.floor(numbers.length / 2)];
    }
};