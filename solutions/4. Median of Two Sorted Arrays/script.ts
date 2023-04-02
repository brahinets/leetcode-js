const findMedianSortedArrays = function (nums1: number[], nums2: number[]) {
    let numbers: number[] = [...nums1, ...nums2]
        .sort((a: number, b: number) => a - b);

    if (numbers.length % 2 === 0) {
        return (numbers[numbers.length / 2 - 1] + numbers[numbers.length / 2]) / 2;
    } else {
        return numbers[Math.floor(numbers.length / 2)];
    }
};