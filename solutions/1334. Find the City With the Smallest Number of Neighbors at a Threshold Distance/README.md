# 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance

## Medium

There are `n` cities numbered from `0` to `n-1`. Given the array edges where `edges[i] = [fromi, toi, weighti]`
represents a bidirectional and weighted edge between cities `fromi` and `toi`, and given the integer
`distanceThreshold`. Return the city with the smallest number of cities that are reachable through some path and whose
distance is at most `distanceThreshold`, If there are multiple such cities, return the city with the greatest number.
Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

### Constraints:

- `2 <= n <= 100`
- `1 <= edges.length <= n * (n - 1) / 2`
- `edges[i].length == 3`
- `0 <= fromi < toi < n`
- `1 <= weighti, distanceThreshold <= 10^4`
- All pairs `(fromi, toi)` are distinct.
