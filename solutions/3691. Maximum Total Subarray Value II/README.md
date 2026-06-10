# Maximum Total Subarray Value II

## Hard

You are given an integer array `nums` of length `n` and an integer `k`.

You must select **exactly** `k` **distinct** non-empty subarrays `nums[l..r]` of `nums`. Subarrays may overlap, but the exact same subarray (same `l` and `r`) cannot be chosen more than once.

The **value** of a subarray `nums[l..r]` is:

- `max(nums[l..r]) - min(nums[l..r])`

The **total value** is the sum of the values of all chosen subarrays.

Return the **maximum** possible total value.

**Constraints:**

- `1 <= n == nums.length <= 5 * 10^4`
- `0 <= nums[i] <= 10^9`
- `1 <= k <= min(10^5, n * (n + 1) / 2)`
