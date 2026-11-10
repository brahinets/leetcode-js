# 3693. Climbing Stairs II

## Medium

You are climbing a staircase with `n + 1` steps, numbered from `0` to `n`.

You are also given a **1-indexed** integer array `costs` of length `n`, where `costs[i]` is the
cost of step `i`.

From step `i`, you can jump **only** to step `i + 1`, `i + 2`, or `i + 3`. The cost of jumping
from step `i` to step `j` is defined as: `costs[j] + (j - i)^2`

You start from step 0 with `cost = 0`.

Return the **minimum** total cost to reach step `n`.

### Constraints:

- `1 <= n == costs.length <= 10^5`
- `1 <= costs[i] <= 10^4`
