# 3203. Find Minimum Diameter After Merging Two Trees

## Hard

There exist two undirected trees with `n` and `m` nodes, numbered from `0` to `n - 1` and from `0` to `m - 1`,
respectively. You are given two 2D integer arrays `edges1` and `edges2` of lengths `n - 1` and `m - 1`, respectively,
where `edges1[i] = [ai, bi]` indicates that there is an edge between nodes `ai` and `bi` in the first tree and
`edges2[i] = [ui, vi]` indicates that there is an edge between nodes `ui` and `vi` in the second tree. You must connect
one node from the first tree with another node from the second tree with an edge. Return the minimum possible diameter
of the resulting tree. The diameter of a tree is the length of the longest path between any two nodes in the tree.

### Constraints:

- `1 <= n, m <= 10^5`
- `edges1.length == n - 1`
- `edges2.length == m - 1`
- `edges1[i].length == edges2[i].length == 2`
- `edges1[i] = [ai, bi]`
- `0 <= ai, bi < n`
- `edges2[i] = [ui, vi]`
- `0 <= ui, vi < m`
- The input is generated such that `edges1` and `edges2` represent valid trees.
