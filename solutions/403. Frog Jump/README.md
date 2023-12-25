# 403. Frog Jump

## Hard

A frog is crossing a river. The river is divided into some number of units, and at each unit, there may or may not exist
a stone. The frog can jump on a stone, but it must not jump into the water. Given a list of stones' positions (in units)
in sorted ascending order, determine if the frog can cross the river by landing on the last stone. Initially, the frog
is on the first stone and assumes the first jump must be `1` unit. If the frog's last jump was `k` units, its next jump
must be either `k - 1`, `k`, or `k + 1` units. The frog can only jump in the forward direction.

### Constraints:

- `2 <= stones.length <= 2000`
- `0 <= stones[i] <= 2^31 - 1`
- `stones[0] == 0`
- `stones` is sorted in a strictly increasing order.
