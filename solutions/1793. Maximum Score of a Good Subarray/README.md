# 1793. Maximum Score of a Good Subarray

## Hard

You are given an array of integers `nums` (0-indexed) and an integer `k`. The score of a subarray `(i, j)` is defined
as `min(nums[i], nums[i+1], ..., nums[j]) * (j - i + 1)`. A good subarray is a subarray where `i <= k <= j`. Return the
maximum possible score of a good subarray.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 2 * 10^4`
- `0 <= k < nums.length`

**Note:** Logic similar to [11. Container With Most Water](../11.%20Container%20With%20Most%20Water)
