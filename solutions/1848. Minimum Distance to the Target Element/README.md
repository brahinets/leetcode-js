# 1848. Minimum Distance to the Target Element

## Easy

Given an integer array `nums` **(0-indexed)** and two integers `target` and `start`, find an index `i` such that `nums[i] == target` and `abs(i - start)` is **minimized**. Note that `abs(x)` is the absolute value of `x`.

Return `abs(i - start)`.

It is **guaranteed** that `target` exists in `nums`.

### Constraints:

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^4`
- `0 <= start < nums.length`
- `target` is in `nums`.
