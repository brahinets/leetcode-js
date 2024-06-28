# 2285. Maximum Total Importance of Roads

## Medium

You are given an integer `n` denoting the number of cities in a country. The cities are numbered from `0` to `n - 1`.
You are also given a 2D integer array `roads` where `roads[i] = [ai, bi]` denotes that there exists a bidirectional road
connecting cities `ai` and `bi`. You need to assign each city with an integer value from `1` to `n`, where each value
can only be used once. The importance of a road is then defined as the sum of the values of the two cities it connects.
Return the maximum total importance of all roads possible after assigning the values optimally.

### Constraints:

- `2 <= n <= 5 * 10^4`
- `1 <= roads.length <= 5 * 10^4`
- `roads[i].length == 2`
- `0 <= ai, bi <= n - 1`
- `ai != bi`
- There are no duplicate roads.
