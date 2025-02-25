# 3152. Special Array II

## Medium

An array is considered special if every pair of its adjacent elements contains two numbers with different parity. You
are given an array of integer `nums` and a 2D integer matrix `queries`, where for `queries[i] = [fromi, toi]` your task
is to check that subarray `nums[fromi..toi]` is special or not. Return an array of booleans answer such that `answer[i]`
is `true` if `nums[fromi..toi]` is special.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 2`
- `0 <= queries[i][0] <= queries[i][1] <= nums.length - 1`
