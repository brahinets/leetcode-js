# 2200. Find All K-Distant Indices in an Array

## Easy

You are given a 0-indexed integer array `nums` and two integers `key` and `k`. A `k`-distant index is an index `i` of
`nums` for which there exists at least one index `j` such that `|i - j| <= k` and `nums[j] == key`. Return a list of all
`k`-distant indices sorted in increasing order.

### Constraints:

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `key` is an integer from the array `nums`
- `1 <= k <= nums.length`
