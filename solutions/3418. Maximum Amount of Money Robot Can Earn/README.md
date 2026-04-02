# 3418. Maximum Amount of Money Robot Can Earn

## Medium

You are given an `m x n` grid `coins`. A robot starts at `(0, 0)` and must reach `(m - 1, n - 1)`, moving only right or down. Each cell `coins[i][j]` represents coins gained if `>= 0`, or coins stolen by a robber if `< 0`. The robot can neutralize robbers in **at most 2** cells, preventing the theft.

Return the **maximum** profit the robot can gain.

### Constraints:

- `m == coins.length`
- `n == coins[0].length`
- `1 <= m, n <= 500`
- `-1000 <= coins[i][j] <= 1000`
