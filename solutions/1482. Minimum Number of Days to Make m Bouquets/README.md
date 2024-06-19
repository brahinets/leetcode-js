# 1482. Minimum Number of Days to Make m Bouquets

## Medium

You are given an integer array `bloomDay`, an integer `m` and an integer `k`. You want to make `m` bouquets. To make a
bouquet, you need to use `k` adjacent flowers from the garden. The garden consists of `n` flowers, the `ith` flower will
bloom in the `bloomDay[i]` and then can be used in exactly one bouquet. Return the minimum number of days you need to
wait to be able to make `m` bouquets from the garden. If it is impossible to make m bouquets return `-1`.

### Constraints:

- `bloomDay.length == n`
- `1 <= n <= 10^5`
- `1 <= bloomDay[i] <= 10^9`
- `1 <= m <= 10^6`
- `1 <= k <= n`
