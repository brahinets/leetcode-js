# 3652. Best Time to Buy and Sell Stock using Strategy

## Medium

You are given two integer arrays `prices` and strategy, where:

- `prices[i]` is the price of a given stock on the ith day.
- `strategy[i]` represents a trading action on the ith day, where:
- `-1` indicates buying one unit of the stock.
- `0` indicates holding the stock.
- `1` indicates selling one unit of the stock.
  You are also given an even integer k, and may perform at most one modification to strategy. A modification consists
  of:

Selecting exactly k consecutive elements in strategy.
Set the first `k / 2` elements to `0` (hold).
Set the last `k / 2` elements to `1` (sell).
The profit is defined as the sum of `strategy[i] * prices[i]` across all days.

Return the maximum possible profit you can achieve.

**Note:** There are no constraints on budget or stock ownership, so all buy and sell operations are feasible regardless
of past actions.

### Constraints:

- `2 <= prices.length == strategy.length <= 10^5`
- `1 <= prices[i] <= 10^5`
- `-1 <= strategy[i] <= 1`
- `2 <= k <= prices.length`
- `k` is even
