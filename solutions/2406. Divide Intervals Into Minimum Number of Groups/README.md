# 2406. Divide Intervals Into Minimum Number of Groups

## Medium

You are given a 2D integer array `intervals` where `intervals[i] = [lefti, righti]` represents the inclusive interval
`[lefti, righti]`. You have to divide the intervals into one or more groups such that each interval is in exactly one
group, and no two intervals that are in the same group intersect each other. Return the minimum number of groups you
need to make. Two intervals intersect if there is at least one common number between them. For example, the intervals
`[1, 5]` and [`5, 8]` intersect.

### Constraints:

- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `1 <= lefti <= righti <= 10^6`
