# 3655. XOR After Range Multiplication Queries II

## Hard

You are given an integer array `nums` of length `n` and a 2D integer array `queries` of size `q`, where `queries[i] = [l, r, k, v]`.

For each query, multiply every element at indices `l, l+k, l+2k, ...` (up to `r`) by `v` modulo `10^9 + 7`.

Return the bitwise XOR of all elements in `nums` after processing all queries.

### Constraints:

- `1 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= q <= 10^5`
- `0 <= l <= r < n`
- `1 <= k <= n`
- `1 <= v <= 10^5`
