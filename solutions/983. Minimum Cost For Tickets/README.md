# 983. Minimum Cost For Tickets

## Medium

You have planned some train traveling one year in advance. The days of the year in which you will travel are given as an
integer array `days`. Each day is an integer from `1` to `365`.

Train tickets are sold in three different ways:

- a 1-day pass is sold for `costs[0]` dollars,
- a 7-day pass is sold for `costs[1]` dollars, and
- a 30-day pass is sold for `costs[2]` dollars.

The passes allow that many days of consecutive travel. Return the minimum number of dollars you need to travel every day
in the given list of days.

### Constraints:

- `1 <= days.length <= 365`
- `1 <= days[i] <= 365`
- `days` is in strictly increasing order.
- `costs.length == 3`
- `1 <= costs[i] <= 1000`
