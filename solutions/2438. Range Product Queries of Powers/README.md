# 2438. Range Product Queries of Powers

## Medium

Given a positive integer `n`, there exists a 0-indexed array called `powers`, composed of the minimum number of powers
of `2` that sum to `n`. The array is sorted in non-decreasing order, and there is only one way to form the array. You
are also given a 0-indexed 2D integer array `queries`, where `queries[i] = [lefti, righti]`. Each `queries[i]`
represents a query where you have to find the product of all `powers[j]` with `lefti <= j <= righti`. Return an array
answers, equal in length to `queries`, where `answers[i]` is the answer to the `ith` query. Since the answer to the
`ith` query may be too large, each `answers[i]` should be returned modulo `10^9 + 7`.

### Constraints:

- `1 <= n <= 10^9`
- `1 <= queries.length <= 10^5`
- `0 <= starti <= endi < powers.length`
