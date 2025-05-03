# 1007. Minimum Domino Rotations For Equal Row

## Medium

In a row of dominoes, `tops[i]` and `bottoms[i]` represent the top and bottom halves of the `ith` domino. (A domino is a
tile with two numbers from 1 to 6 - one on each half of the tile.) We may rotate the `ith` domino, so that `tops[i]` and
`bottoms[i]` swap values. Return the minimum number of rotations so that all the values in `tops` are the same, or all
the values in `bottoms` are the same. If it cannot be done, return `-1`.

### Constraints:

- `2 <= tops.length <= 2 * 10^4`
- `bottoms.length == tops.length`
- `1 <= tops[i], bottoms[i] <= 6`
