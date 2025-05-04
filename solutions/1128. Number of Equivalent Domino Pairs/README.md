# 1128. Number of Equivalent Domino Pairs

## Easy

Given a list of dominoes, `dominoes[i] = [a, b]` is equivalent to `dominoes[j] = [c, d]` if and only if either (`a == c`
and `b == d`), or (`a == d` and `b == c`) - that is, one domino can be rotated to be equal to another domino. Return the
number of pairs `(i, j)` for which `0 <= i < j < dominoes.length`, and `dominoes[i]` is equivalent to `dominoes[j]`.

### Constraints:

- `1 <= dominoes.length <= 4 * 10^4`
- `dominoes[i].length == 2`
- `1 <= dominoes[i][j] <= 9`
