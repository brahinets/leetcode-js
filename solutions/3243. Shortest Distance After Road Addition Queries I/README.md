# 3243. Shortest Distance After Road Addition Queries I

## Medium

You are given an integer `n` and a 2D integer array `queries`. There are `n` cities numbered from `0` to `n - 1`.
Initially, there is a unidirectional road from city `i` to city `i + 1` for all `0 <= i < n - 1`.
`queries[i] = [ui, vi]` represents the addition of a new unidirectional road from city `ui` to city `vi`. After each
query, you need to find the length of the shortest path from city `0` to city `n - 1`. Return an array `answer` where
for each `i` in the range `[0, queries.length - 1]`, `answer[i]` is the length of the shortest path from city `0` to
city `n - 1` after processing the first `i + 1` queries.

### Constraints:

- `3 <= n <= 500`
- `1 <= queries.length <= 500`
- `queries[i].length == 2`
- `0 <= queries[i][0] < queries[i][1] < n`
- `1 < queries[i][1] - queries[i][0]`
- There are no repeated roads among the `queries`
