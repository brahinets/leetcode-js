# 3312. Sorted GCD Pair Queries

## Hard

Given an integer array `nums` and an integer array `queries`, you must:

1. Calculate the GCD of all possible pairs `(nums[i], nums[j])` where `0 <= i < j < n`
2. Sort these GCD values in ascending order to create `gcdPairs`
3. For each query index, return the corresponding element from `gcdPairs`

## Constraints

- `2 <= n == nums.length <= 10^5`
- `1 <= nums[i] <= 5 * 10^4`
- `1 <= queries.length <= 10^5`
- `0 <= queries[i] < n * (n - 1) / 2`
