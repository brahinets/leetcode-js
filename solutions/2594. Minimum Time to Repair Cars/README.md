# 2594. Minimum Time to Repair Cars

## Medium

You are given an integer array `ranks` representing the ranks of some mechanics. `ranksi` is the rank of the `ith`
mechanic. A mechanic with a rank `r` can repair `n` cars in `r * n^2` minutes. You are also given an integer `cars`
representing the total number of cars waiting in the garage to be repaired. Return the minimum time taken to repair all
the cars.

**Note:** All the mechanics can repair the cars simultaneously.

### Constraints:

- `1 <= ranks.length <= 10^5`
- `1 <= ranks[i] <= 100`
- `1 <= cars <= 10^6`
