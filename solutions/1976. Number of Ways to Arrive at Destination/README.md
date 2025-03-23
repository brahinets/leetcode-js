# 1976. Number of Ways to Arrive at Destination

## Medium

You are in a city that consists of `n` intersections numbered from `0` to `n - 1` with bi-directional roads between some
intersections. The inputs are generated such that you can reach any intersection from any other intersection and that
there is at most one road between any two intersections. You are given an integer `n` and a 2D integer array `roads`
where `roads[i] = [ui, vi, timei]` means that there is a road between intersections `ui` and `vi` that takes `timei`
minutes to travel. You want to know in how many ways you can travel from intersection `0` to intersection `n - 1` in the
shortest amount of time. Return the number of ways you can arrive at your destination in the shortest amount of time.
Since the answer may be large, return it modulo `10^9 + 7`.

### Constraints:

- `1 <= n <= 200`
- `n - 1 <= roads.length <= n * (n - 1) / 2`
- `roads[i].length == 3`
- `0 <= ui, vi <= n - 1`
- `1 <= timei <= 10^9`
- `ui != vi`
- There is at most one road connecting any two intersections.
- You can reach any intersection from any other intersection.
