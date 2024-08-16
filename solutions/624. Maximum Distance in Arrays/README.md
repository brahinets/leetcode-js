# 624. Maximum Distance in Arrays

## Medium

You are given `m` arrays, where each array is sorted in ascending order. You can pick up two integers from two different
arrays (each array picks one) and calculate the distance. We define the distance between two integers `a` and `b` to be
their absolute difference `|a - b|`. Return the maximum distance.

### Constraints:

- `m == arrays.length`
- `2 <= m <= 10^5`
- `1 <= arrays[i].length <= 500`
- `-10^4 <= arrays[i][j] <= 10^4`
- `arrays[i]` is sorted in ascending order.
- There will be at most `10^5` integers in all the arrays.
