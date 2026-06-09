# Maximum Total Subarray Value I

## Medium

You are given an integer array `nums` of length `n` and an integer `k`.

Choose exactly `k` non-empty subarrays `nums[l..r]` of `nums`. Subarrays may overlap, and you may choose the same subarray (same `l` and `r`) more than once.

For a chosen subarray `nums[l..r]`, its **value** is:

`max(nums[l..r]) - min(nums[l..r])`

The **total value** is the sum of the values of all chosen subarrays. Return the maximum possible total value.

## Constraints

- `1 <= n == nums.length <= 5 * 10^4`
- `0 <= nums[i] <= 10^9`
- `1 <= k <= 10^5`
