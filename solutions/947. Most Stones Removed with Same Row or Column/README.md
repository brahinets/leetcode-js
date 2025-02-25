# 947. Most Stones Removed with Same Row or Column

## Medium

On a 2D plane, we place `n` stones at some integer coordinate points. Each coordinate point may have at most one stone.
A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.
Given an array `stones` of length `n` where `stones[i] = [xi, yi]` represents the location of the `ith` stone, return
the largest possible number of stones that can be removed.

### Constraints:

– `1 <= stones.length <= 1000`
– `0 <= xi, yi <= 10^4`
– No two stones are at the same coordinate point.
