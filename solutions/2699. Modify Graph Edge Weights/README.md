# 2699. Modify Graph Edge Weights

## Hard

You are given an undirected weighted connected graph containing `n` nodes labeled from `0` to `n - 1`, and an integer
array `edges` where `edges[i] = [ai, bi, wi]` indicates that there is an edge between nodes `ai` and `bi` with weight
`wi`. Some edges have a weight of `-1` (`wi = -1`), while others have a positive weight `(wi > 0)`. Your task is to
modify all edges with a weight of `-1` by assigning them positive integer values in the range `[1, 2 * 10^9]` so that
the shortest distance between the nodes `source` and `destination` becomes equal to an integer `target`. If there are
multiple modifications that make the shortest distance between `source` and `destination` equal to `target`, any of them
will be considered correct. Return an array containing all edges (even unmodified ones) in any order if it is possible
to make the shortest distance from `source` to `destination` equal to `target`, or an empty array if it's impossible.
Note: You are not allowed to modify the weights of edges with initial positive weights.

### Constraints:

- `1 <= n <= 100`
- `1 <= edges.length <= n * (n - 1) / 2`
- `edges[i].length == 3`
- `0 <= ai, bi < n`
- `wi = -1` or `1 <= wi <= 10^7`
- `ai != bi`
- `0 <= source, destination < n`
- `source != destination`
- `1 <= target <= 10^9`
- The graph is connected, and there are no self-loops or repeated edges
