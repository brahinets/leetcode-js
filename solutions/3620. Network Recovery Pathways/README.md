# 3620. Network Recovery Pathways

## Hard

You are given a directed acyclic graph of `n` nodes numbered from 0 to `n - 1`. This is represented by a 2D array `edges` of length `m`, where `edges[i] = [ui, vi, costi]` indicates a one-way communication from node `ui` to node `vi` with a recovery cost of `costi`.

Some nodes may be offline. You are given a boolean array `online` where `online[i] = true` means node `i` is online. Nodes 0 and `n - 1` are always online.

A path from 0 to `n - 1` is **valid** if:

- All intermediate nodes on the path are online.
- The total recovery cost of all edges on the path does not exceed `k`.

For each valid path, define its **score** as the minimum edge-cost along that path.

Return the **maximum** path score (i.e., the largest **minimum**-edge cost) among all valid paths. If no valid path exists, return -1.

**Constraints:**

- `n == online.length`
- `2 <= n <= 5 * 10^4`
- `0 <= m == edges.length <= min(10^5, n * (n - 1) / 2)`
- `edges[i] = [ui, vi, costi]`
- `0 <= ui, vi < n`
- `ui != vi`
- `0 <= costi <= 10^9`
- `0 <= k <= 5 * 10^13`
- `online[i]` is either `true` or `false`, and both `online[0]` and `online[n - 1]` are `true`.
- The given graph is a directed acyclic graph.
