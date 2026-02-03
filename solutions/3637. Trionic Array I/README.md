# 3637. Trionic Array I

## Easy

You are given an integer array `nums` of length `n`.

An array is **trionic** if there exist indices `0 < p < q < n − 1` such that:
- `nums[0...p]` is strictly increasing
- `nums[p...q]` is strictly decreasing
- `nums[q...n − 1]` is strictly increasing

Return `true` if `nums` is trionic, otherwise return `false`.

### Constraints:

- `3 <= n <= 100`
- `-1000 <= nums[i] <= 1000`
