# 689. Maximum Sum of 3 Non-Overlapping Subarrays

## Hard

Given an integer array `nums` and an integer `k`, find three non-overlapping subarrays of length `k` with maximum sum
and return them. Return the result as a list of indices representing the starting position of each interval (0-indexed).
If there are multiple answers, return the lexicographically smallest one.

### Constraints:

- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i] < 2^16`
- `1 <= k <= floor(nums.length / 3)`
