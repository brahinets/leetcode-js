# 3264. Final Array State After K Multiplication Operations I

## Easy

You are given an integer array `nums`, an integer `k`, and an integer multiplier. You need to perform `k` operations on
`nums`. In each operation: Find the minimum value `x` in `nums`. If there are multiple occurrences of the minimum value,
select the one that appears first. Replace the selected minimum value `x` with `x * multiplier`. Return an integer array
denoting the final state of `nums` after performing all `k` operations.

### Constraints:

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 10`
- `1 <= multiplier <= 5`
