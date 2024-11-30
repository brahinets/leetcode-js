# 2097. Valid Arrangement of Pairs

## Hard

You are given a 0-indexed 2D integer array `pairs` where `pairs[i] = [starti, endi]`. An arrangement of pairs is valid
if for every index `i` where `1 <= i < pairs.length`, we have `endi-1 == starti`. Return any valid arrangement of pairs.
Note: The inputs will be generated such that there exists a valid arrangement of pairs.

### Constraints:

- `1 <= pairs.length <= 105`
- `pairs[i].length == 2`
- `0 <= starti, endi <= 109`
- `starti != endi`
- No two pairs are exactly the same.
- There exists a valid arrangement of pairs.
