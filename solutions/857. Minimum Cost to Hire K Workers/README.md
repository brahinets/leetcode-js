# 857. Minimum Cost to Hire K Workers

## Hard

There are `n` workers. You are given two integer arrays `quality` and `wage` where `quality[i]` is the quality of
the `ith` worker and `wage[i]` is the minimum wage expectation for the `ith` worker.

We want to hire exactly `k` workers to form a paid group. To hire a group of `k` workers, we must pay them according to
the following rules:

- Every worker in the paid group must be paid at least their minimum wage expectation.
- In the group, each worker's pay must be directly proportional to their quality. This means if a worker’s quality is
  double that of another worker in the group, then they must be paid twice as much as the other worker.

Given the integer `k`, return the least amount of money needed to form a paid group satisfying the above conditions.
Answers within `10^-5` of the actual answer will be accepted.

### Constraints:

- `n == quality.length == wage.length`
- `1 <= k <= n <= 10^4`
- `1 <= quality[i], wage[i] <= 10^4`
