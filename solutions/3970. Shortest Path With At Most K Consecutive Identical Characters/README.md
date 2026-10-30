# 3970. Shortest Path With At Most K Consecutive Identical Characters

## Medium

You are given an integer `n` representing the number of nodes in a **directed weighted** graph, numbered from 0 to `n - 1`. This is represented by a 2D integer array `edges`, where `edges[i] = [u_i, v_i, w_i]` represents a directed edge from node `u_i` to node `v_i` with weight `w_i`.

You are also given a string `labels` of length `n`, where `labels[i]` is the character assigned to node `i`, and an integer `k`.

Return the **minimum** **total** edge weight of a path from node 0 to node `n - 1` such that the concatenation of the labels of the nodes along the path contains **at most** `k` **consecutive** **identical** characters. If no valid path exists, return -1.

### Constraints:

- `1 <= n == labels.length <= 5 * 10^4`
- `0 <= edges.length <= 5 * 10^4`
- `edges[i] == [u_i, v_i, w_i]`
- `0 <= u_i, v_i <= n - 1`
- `u_i != v_i`
- `1 <= w_i <= 10^4`
- `labels` consists of lowercase English letters
- `1 <= k <= 50`
