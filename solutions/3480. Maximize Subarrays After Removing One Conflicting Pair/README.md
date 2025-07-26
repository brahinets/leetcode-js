# 3480. Maximize Subarrays After Removing One Conflicting Pair

# Hard

You are given an integer `n` which represents an array `nums` containing the numbers from `1` to `n` in order.
Additionally, you are given a 2D array `conflictingPairs`, where `conflictingPairs[i] = [a, b]` indicates that `a` and
`b` form a conflicting pair. Remove exactly one element from `conflictingPairs`. Afterward, count the number of
non-empty subarrays of `nums` which do not contain both `a` and `b` for any remaining conflicting pair `[a, b]`. Return
the maximum number of subarrays possible after removing exactly one conflicting pair.

### Constraints:

- `2 <= n <= 10^5`
- `1 <= conflictingPairs.length <= 2 * n`
- `conflictingPairs[i].length == 2`
- `1 <= conflictingPairs[i][j] <= n`
- `conflictingPairs[i][0] != conflictingPairs[i][1]`
