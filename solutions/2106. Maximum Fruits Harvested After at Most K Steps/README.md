# 2106. Maximum Fruits Harvested After at Most K Steps

## Hard

Fruits are available at some positions on an infinite x-axis. You are given a 2D integer array `fruits` where
`fruits[i] = [positioni, amounti]` depicts `amounti` fruits at the position `positioni`. `fruits` is already sorted by
`positioni` in ascending order, and each `positioni` is unique. You are also given an integer `startPos` and an integer
`k`. Initially, you are at the position `startPos`. From any position, you can either walk to the left or right. It
takes one step to move one unit on the x-axis, and you can walk at most `k` steps in total. For every position you
reach, you harvest all the fruits at that position, and the fruits will disappear from that position. Return the maximum
total number of fruits you can harvest.

### Constraints:

- `1 <= fruits.length <= 10^5`
- `fruits[i].length == 2`
- `0 <= startPos, positioni <= 2 * 10^5`
- `positioni-1 < positioni for any i > 0 (0-indexed)`
- `1 <= amounti <= 10^4`
- `0 <= k <= 2 * 10^5`
