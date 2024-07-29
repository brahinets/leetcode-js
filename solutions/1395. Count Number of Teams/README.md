# 1395. Count Number of Teams

## Medium

There are `n` soldiers standing in a line. Each soldier is assigned a unique rating value. You have to form a team of
`3` soldiers amongst them under the following rules:

- Choose 3 soldiers with index `(i, j, k)` with rating `(rating[i], rating[j], rating[k])`.
- A team is valid if: `(rating[i] < rating[j] < rating[k])` or `(rating[i] > rating[j] > rating[k])` where
  `(0 <= i < j < k < n)`.

Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

### Constraints:

- `n == rating.length`
- `3 <= n <= 1000`
- `1 <= rating[i] <= 10^5`
- All the integers in rating are unique.
