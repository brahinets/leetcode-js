# 2872. Maximum Number of K-Divisible Components

## Hard

There is an undirected tree with `n` nodes labeled from `0` to `n - 1`. You are given the integer `n` and a 2D integer
array `edges` of length `n - 1`, where `edges[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi`
in the tree. You are also given a 0-indexed integer array `values` of length `n`, where `values[i]` is the value
associated with the `ith` node, and an integer `k`. A valid split of the tree is obtained by removing any set of edges,
possibly empty, from the tree such that the resulting components all have values that are divisible by ґ, where the
value of a connected component is the sum of the values of its nodes. Return the maximum number of components in any
valid split.

### Constraints:

- `1 <= n <= 3 * 10^4`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `values.length == n`
- `0 <= values[i] <= 10^9`
- `1 <= k <= 10^9`
- Sum of `values` is divisible by `k`.
- The input is generated such that `edges` represents a valid tree.
