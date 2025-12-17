# 3573. Best Time to Buy and Sell Stock V

## Medium

You are given an integer array `prices` where `prices[i]` is the price of a stock in dollars on the `ith` day, and an
integer `k`. You are allowed to make at most `k` transactions, where each transaction can be either of the following:

- Normal transaction: Buy on day `i`, then sell on a later day `j` where `i < j`. You profit `prices[j] - prices[i]`.
- Short selling transaction: Sell on day `i`, then buy back on a later day `j` where `i < j`. You profit
  `prices[i] - prices[j]`.

Note that you must complete each transaction before starting another. Additionally, you can't buy or sell on the same
day you are selling or buying back as part of a previous transaction.

Return the maximum total profit you can earn by making at most `k` transactions.

### Constraints:

- `2 <= prices.length <= 10^3`
- `1 <= prices[i] <= 10^9`
- `1 <= k <= prices.length / 2`
