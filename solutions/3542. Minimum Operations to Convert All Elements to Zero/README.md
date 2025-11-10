# 3542. Minimum Operations to Convert All Elements to Zero

## Medium

You are given an array `nums` of size `n`, consisting of non-negative integers. Your task is to apply some (possibly
zero) operations on the array so that all elements become 0. In one operation, you can select a subarray `[i, j]` (where
`0 <= i <= j < n`) and set all occurrences of the minimum non-negative integer in that subarray to 0. Return the minimum
number of operations required to make all elements in the array `0`.

### Constraints:

- `1 <= n == nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`
