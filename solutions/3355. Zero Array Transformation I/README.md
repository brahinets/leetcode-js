# 3355. Zero Array Transformation I

## Medium

You are given an integer array `nums` of length `n` and a 2D array queries, where `queries[i] = [li, ri]`. For each
`queries[i]`: Select a subset of indices within the range `[li, ri]` in `nums`. Decrement the values at the selected
indices by `1`. A Zero Array is an array where all elements are equal to `0`. Return `true` if it is possible to
transform `nums` into a Zero Array after processing all the queries sequentially, otherwise return `false`.

### Constraints:

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 2`
- `0 <= li <= ri < nums.length`
