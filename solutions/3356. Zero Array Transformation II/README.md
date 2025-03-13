# 3356. Zero Array Transformation II

## Medium

You are given an integer array `nums` of length `n` and a 2D array `queries` where `queries[i] = [li, ri, vali]`. Each
`queries[i]` represents the following action on `nums`:

- Decrement the value at each index in the range `[li, ri]` in `nums` by at most `vali`.
- The amount by which each value is decremented can be chosen independently for each index.

A Zero Array is an array with all its elements equal to `0`. Return the minimum possible non-negative value of `k`, such
that after processing the first `k` queries in sequence, `nums` becomes a Zero Array. If no such k exists, return `-1`.

### Constraints:

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 5 * 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 3`
- `0 <= li <= ri < nums.length`
- `1 <= vali <= 5`
