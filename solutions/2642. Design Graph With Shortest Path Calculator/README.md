# 2642. Design Graph With Shortest Path Calculator

## Hard

There is a directed weighted graph that consists of `n` nodes numbered from `0` to `n - 1`. The edges of the graph are
initially represented by the given array edges where `edges[i] = [fromi, toi, edgeCosti]` meaning that there is an edge
from `fromi` to `toi` with the cost `edgeCosti`.

Implement the Graph class:

- `Graph(int n, int[][] edges)` initializes the object with `n` nodes and the given edges.
- `addEdge(int[] edge)` adds an edge to the list of edges where `edge = [from, to, edgeCost]`. It is guaranteed that
  there is no edge between the two nodes before adding this one.
- `int shortestPath(int node1, int node2)` returns the minimum cost of a path from `node1` to `node2`. If no path
  exists, `return -1`. The cost of a path is the sum of the costs of the edges in the path.

### Constraints:

- `1 <= n <= 100`
- `0 <= edges.length <= n * (n - 1)`
- `edges[i].length == edge.length == 3`
- `0 <= fromi, toi, from, to, node1, node2 <= n - 1`
- `1 <= edgeCosti, edgeCost <= 10^6`
- There are no repeated edges and no self-loops in the graph at any point.
- At most 100 calls will be made for addEdge.
- At most 100 calls will be made for shortestPath.
