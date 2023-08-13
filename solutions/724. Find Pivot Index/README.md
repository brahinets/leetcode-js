# 724. Find Pivot Index

## Easy

Given an array of integers `nums`, calculate the pivot index of this array. The pivot index is the index where the sum
of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's
right. If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the
left. This also applies to the right edge of the array. Return the leftmost pivot index. If no such index exists,
return `-1`.

### Constraints:
`1 <= nums.length <= 10^4`
`-1000 <= nums[i] <= 1000`

**Note:** This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/
