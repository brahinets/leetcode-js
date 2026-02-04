# 3640. Trionic Array II

## Hard

You are given an integer array `nums` of length `n`.

A trionic subarray is a contiguous subarray `nums[l...r]` (with `0 <= l < r < n`) for which there exist indices
`l < p < q < r` such that:

- `nums[l...p]` is strictly increasing.
- `nums[p...q]` is strictly decreasing.
- `nums[q...r]` is strictly increasing.

Return the maximum sum of any trionic subarray in `nums`.

### Constraints:

- `4 <= n = nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- It is guaranteed that at least one trionic subarray exists.