# 3488. Closest Equal Element Queries

## Medium

You are given a **circular** array `nums` and an array `queries`.

For each query `queries[i]`, find the **minimum distance** between the element at index `queries[i]` and any other index `j` in the circular array where `nums[j] == nums[queries[i]]`.

If no such index exists, the answer for that query is `-1`.

Return an array `answer` of the same size as `queries`, where `answer[i]` is the result for query `i`.

The distance between two indices `i` and `j` in a circular array of length `n` is `min(|i - j|, n - |i - j|)`.

### Constraints:

- `1 <= queries.length <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^6`
- `0 <= queries[i] < nums.length`
