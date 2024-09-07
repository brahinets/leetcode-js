# 1425. Constrained Subsequence Sum

## Hard

Given an integer array `nums` and an integer `k`, return the maximum sum of a non-empty subsequence of that array such
that for every two consecutive integers in the subsequence, `nums[i]` and `nums[j]`, where `i < j`, the condition
`j - i <= k` is satisfied. A subsequence of an array is obtained by deleting some number of elements (can be zero) from
the array, leaving the remaining elements in their original order.

### Constraints:

- `1 <= k <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`