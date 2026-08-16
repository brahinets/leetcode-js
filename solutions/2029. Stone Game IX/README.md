# 2029. Stone Game IX

## Medium

Alice and Bob continue their games with piles of stones. There is a row of `n` stones, and each stone has an
associated value. You are given an integer array `stones`, where `stones[i]` is the **value** of the `i`th stone.

Alice and Bob take turns, with Alice starting first. On each turn, the current player removes a stone from
`stones`. If the **sum** of the values of all the stones removed so far becomes **divisible by `3`**, then the
player who made that move **loses**, and the game ends immediately. If all the stones are removed without any
player losing, the game ends in a **draw**.

Assuming Alice and Bob play **optimally**, return `true` if Alice wins the game, and `false` otherwise (that is,
if Bob wins or the game ends in a draw).

### Constraints

- `1 <= stones.length <= 10^5`
- `1 <= stones[i] <= 10^4`
