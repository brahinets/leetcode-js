# 3161. Block Placement Queries

## Hard

There exists an infinite number line, with its origin at 0 and extending towards the positive x-axis. You are given a 2D array `queries`, which contains two types of queries.

For a query of type 1, `queries[i] = [1, x]`, build an obstacle at distance `x` from the origin. It is guaranteed that there is no obstacle at distance `x` when the query is asked.

For a query of type 2, `queries[i] = [2, x, sz]`, check if it is possible to place a block of size `sz` anywhere in the range `[0, x]` on the line, such that the block entirely lies in the range `[0, x]`. A block cannot be placed if it intersects with any obstacle, but it may touch it.

Note that you do not actually place the block. Queries are separate. Return a boolean array `results`, where `results[i]` is true if you can place the block specified in the ith query of type 2, and false otherwise.

### Constraints:

- `1 <= queries.length <= 15 * 10^4`
- `2 <= queries[i].length <= 3`
- `1 <= queries[i][0] <= 2`
- `1 <= x, sz <= min(5 * 10^4, 3 * queries.length)`
- There is no obstacle at `x` when type 1 query is asked
- There is at least one query of type 2
