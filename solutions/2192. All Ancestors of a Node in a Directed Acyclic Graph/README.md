# 2192. All Ancestors of a Node in a Directed Acyclic Graph

## Medium

You are given a positive integer `n` representing the number of nodes of a Directed Acyclic Graph (DAG). The nodes are
numbered from `0` to `n - 1` (inclusive). You are also given a 2D integer array `edges`, where `edges[i] = [fromi, toi]`
denotes that there is a unidirectional edge from `fromi` to `toi` in the graph. Return a list `answer`, where
`answer[i]` is the list of ancestors of the `ith` node, sorted in ascending order. A node `u` is an ancestor of another
node `v` if `u` can reach `v` via a set of edges.

### Constraints:

- `1 <= n <= 1000`
- `0 <= edges.length <= min(2000, n * (n - 1) / 2)`
- `edges[i].length == 2`
- `0 <= fromi, toi <= n - 1`
- `fromi != toi`
- There are no duplicate edges.
- The graph is directed and acyclic.
