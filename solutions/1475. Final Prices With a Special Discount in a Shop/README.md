# 1475. Final Prices With a Special Discount in a Shop

## Easy

You are given an integer array `prices` where `prices[i]` is the price of the `ith` item in a shop. There is a special
discount for items in the shop. If you buy the `ith` item, then you will receive a discount equivalent to `prices[j]`
where `j` is the minimum index such that `j > i` and `prices[j] <= prices[i]`. Otherwise, you will not receive any
discount at all. Return an integer array `answer` where `answer[i]` is the final price you will pay for the `ith` item
of the shop, considering the special discount.

### Constraints:

- `1 <= prices.length <= 500`
- `1 <= prices[i] <= 1000`
