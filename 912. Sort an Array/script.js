/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    return mergeSort(nums);
};

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right)
}

function merge(left, right) {
    const sortedArr = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }

    return [...sortedArr, ...left, ...right]
}