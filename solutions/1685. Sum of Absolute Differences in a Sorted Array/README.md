# 1685. Sum of Absolute Differences in a Sorted Array

## Medium

You are given an integer array `nums` sorted in non-decreasing order. Build and return an integer array `result` with
the same length as nums such that `result[i]` is equal to the summation of absolute differences between `nums[i]` and
all the other elements in the array. In other words, `result[i]` is equal to `sum(|nums[i]-nums[j]|)`
where `0 <= j < nums.length` and `j != i` (0-indexed).

### Constraints:

– `2 <= nums.length <= 10^5`
– `1 <= nums[i] <= nums[i + 1] <= 10^4`
