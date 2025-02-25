# 2558. Take Gifts From the Richest Pile

## Easy

You are given an integer array `gifts` denoting the number of gifts in various piles. Every second, you do the
following: Choose the pile with the maximum number of gifts. If there is more than one pile with the maximum number of
gifts, choose any. Leave behind the floor of the square root of the number of gifts in the pile. Take the rest of the
gifts. Return the number of gifts remaining after `k` seconds.

### Constraints:

- `1 <= gifts.length <= 10^3`
- `1 <= gifts[i] <= 10^9`
- `1 <= k <= 10^3`
