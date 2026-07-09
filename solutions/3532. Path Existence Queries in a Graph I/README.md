# 3532. Path Existence Queries in a Graph I

## Medium

You are given an integer `n` representing the number of nodes in a graph, labeled from `0` to `n - 1`. Additionally,
you are given a 2D integer array `queries`, where `queries[i] = [ui, vi]`.

Each pair `[ui, vi]` represents a query in which you need to determine whether there exists a path between nodes `ui`
and `vi`.

An undirected edge exists between nodes `u` and `v`, if `|nums[u] - nums[v]| <= maxDiff` (i.e., `nums` is a sorted
array of length `n` where each value represents the label of the corresponding node, and `maxDiff` is a given integer
denoting the maximum allowed difference between the labels of two connected nodes).

Return a boolean array `answer`, where `answer[i]` is `true` if a path exists between `ui` and `vi` for the `ith`
query and `false` otherwise.

### Constraints:

- `1 <= n <= 10^5`
- `nums.length == n`
- `0 <= nums[i] <= 10^5`
- `nums` is sorted in non-decreasing order.
- `0 <= maxDiff <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i] == [ui, vi]`
- `0 <= ui, vi <= n - 1`
