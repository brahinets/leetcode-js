# 2976. Minimum Cost to Convert String I

## Medium

You are given two 0-indexed strings `source` and `target`, both of length `n` and consisting of lowercase English
letters. You are also given two 0-indexed character arrays `original` and `changed`, and an integer array `cost`, where
`cost[i]` represents the cost of changing the character `original[i]` to the character `changed[i]`. You start with the
string `source`. In one operation, you can pick a character `x` from the string and change it to the character `y` at a
cost of `z` if there exists any index `j` such that `cost[j] == z`, `original[j] == x`, and `changed[j] == y`. Return
the minimum cost to convert the string `source` to the string `target` using any number of operations. If it is
impossible to convert `source` to `target`, return `-1`. Note that there may exist indices `i`, `j` such that
`original[j] == original[i]` and `changed[j] == changed[i]`.

### Constraints:

- `1 <= source.length == target.length <= 10^5`
- `source`, `target` consist of lowercase English letters.
- `1 <= cost.length == original.length == changed.length <= 2000`
- `original[i]`, `changed[i]` are lowercase English letters.
- `1 <= cost[i] <= 10^6`
- `original[i] != changed[i]`
