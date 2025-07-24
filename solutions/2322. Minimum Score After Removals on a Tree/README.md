# 2322. Minimum Score After Removals on a Tree

## Hard

There is an undirected connected tree with `n` nodes labeled from `0` to `n - 1` and `n - 1` edges. You are given a
0-indexed integer array `nums` of length `n` where `nums[i]` represents the value of the `ith` node. You are also given
a 2D integer array `edges` of length `n - 1` where `edges[i] = [ai, bi]` indicates that there is an edge between nodes
`ai` and `bi` in the tree. Remove two distinct edges of the tree to form three connected components. For a pair of
removed edges, the following steps are defined: Get the XOR of all the values of the nodes for each of the three
components respectively. The difference between the largest XOR value and the smallest XOR value is the score of the
pair. For example, say the three components have the node values: `[4,5,7]`, `[1,9]`, and `[3,3,3]`. The three XOR
values are `4 ^ 5 ^ 7 = 6, 1 ^ 9 = 8`, and `3 ^ 3 ^ 3 = 3`. The largest XOR value is `8` and the smallest XOR value is
`3`. The score is then `8 - 3 = 5`. Return the minimum score of any possible pair of edge removals on the given tree.

### Constraints:

- `n == nums.length`
- `3 <= n <= 1000`
- `1 <= nums[i] <= 108`
- `edges.length == n - 1`
- `edges[i].length == 2`
- `0 <= ai, bi < n`
- `ai != bi`
- `edges` represents a valid tree.
