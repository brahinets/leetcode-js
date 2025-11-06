# 3607. Power Grid Maintenance

## Medium

You are given an integer `c` representing `c` power stations, each with a unique identifier id from `1` to `c` (1‑based
indexing). These stations are interconnected via `n` bidirectional cables, represented by a 2D array `connections`,
where each element `connections[i] = [ui, vi]` indicates a connection between station `ui` and station `vi`. Stations
that are directly or indirectly connected form a power grid. Initially, all stations are online (operational).
You are also given a 2D array `queries`, where each query is one of the following two types:

- `[1, x]`: A maintenance check is requested for station `x`. If station x is online, it resolves the check by itself.
  If station `x` is offline, the check is resolved by the operational station with the smallest `id` in the same power
  grid as `x`. If no operational station exists in that grid, return `-1`.
- `[2, x]`: Station `x` goes offline (i.e., it becomes non-operational).

Return an array of integers representing the results of each query of type `[1, x]` in the order they appear.
Note: The power grid preserves its structure; an offline (non‑operational) node remains part of its grid and taking it
offline does not alter connectivity.

### Constraints:

- `1 <= c <= 10^5`
- `0 <= n == connections.length <= min(10^5, c * (c - 1) / 2)`
- `connections[i].length == 2`
- `1 <= ui, vi <= c`
- `ui != vi`
- `1 <= queries.length <= 2 * 10^5`
- `queries[i].length == 2`
- `queries[i][0]` is either `1` or `2`.
- `1 <= queries[i][1] <= c`
