# 3372. Maximize the Number of Target Nodes After Connecting Trees I

## Medium

There exist two undirected trees with `n` and `m` nodes, with distinct labels in ranges `[0, n - 1]` and `[0, m - 1]`,
respectively. You are given two 2D integer arrays `edges1` and `edges2` of lengths `n - 1` and `m - 1`, respectively,
where `edges1[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi` in the first tree and
`edges2[i] = [ui, vi]` indicates that there is an edge between nodes `ui` and `vi` in the second tree. You are also
given an integer `k`. Node `u` is target to node `v` if the number of edges on the path from `u` to `v` is less than or
equal to `k`. Note that a node is always target to itself. Return an array of `n` integers `answer`, where `answer[i]`
is the maximum possible number of nodes target to node `i` of the first tree if you have to connect one node from the
first tree to another node in the second tree. Note that queries are independent from each other. That is, for every
query you will remove the added edge before proceeding to the next query.

### Constraints:

- `2 <= n, m <= 1000`
- `edges1.length == n - 1`
- `edges2.length == m - 1`
- `edges1[i].length == edges2[i].length == 2`
- `edges1[i] = [ai, bi]`
- `0 <= ai, bi < n`
- `edges2[i] = [ui, vi]`
- `0 <= ui, vi < m`
- The input is generated such that `edges1` and `edges2` represent valid trees.
- `0 <= k <= 1000`
