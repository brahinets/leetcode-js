# 3650. Minimum Cost Path with Edge Reversals

## Medium

You are given a directed, weighted graph with `n` nodes labeled from `0` to `n - 1`, and an array `edges` where `edges[i] = [ui, vi, wi]` represents a directed edge from node `ui` to node `vi` with cost `wi`.

Each node `ui` has a switch that can be used at most once: when you arrive at `ui` and have not yet used its switch, you may activate it on one of its incoming edges `vi → ui` reverse that edge to `ui → vi` and immediately traverse it.

The reversal is only valid for that single move, and using a reversed edge costs `2 * wi`.

Return the **minimum total cost** to travel from node `0` to node `n - 1`. If it is not possible, return `-1`.

### Constraints:

- `2 <= n <= 5 * 10^4`
- `1 <= edges.length <= 10^5`
- `edges[i] = [ui, vi, wi]`
- `0 <= ui, vi <= n - 1`
- `1 <= wi <= 1000`
