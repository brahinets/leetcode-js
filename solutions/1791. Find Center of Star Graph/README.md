# 1791. Find Center of Star Graph

## Easy

There is an undirected star graph consisting of `n` nodes labeled from `1` to `n`. A star graph is a graph where there
is one center node and exactly `n - 1` edges that connect the center node with every other node. You are given a 2D
integer array `edges` where each `edges[i] = [ui, vi]` indicates that there is an edge between the nodes `ui` and `vi`.
Return the center of the given star graph.

### Constraints:

- `3 <= n <= 10^5`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `1 <= ui, vi <= n`
- `ui != vi`
- The given `edges` represent a valid star graph.
