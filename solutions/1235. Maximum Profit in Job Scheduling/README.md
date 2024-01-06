# 1235. Maximum Profit in Job Scheduling

## Hard

We have `n` jobs, where every job is scheduled to be done from `startTime[i]` to `endTime[i]`, obtaining a profit
of `profit[i]`. You're given the `startTime`, `endTime` and `profit` arrays, return the maximum profit you can take such
that there are no two jobs in the subset with overlapping time range. If you choose a job that ends at time `X` you will
be able to start another job that starts at time `X`.

### Constraints:

- `1 <= startTime.length == endTime.length == profit.length <= 5 * 10^4`
- `1 <= startTime[i] < endTime[i] <= 10^9`
- `1 <= profit[i] <= 10^4`
