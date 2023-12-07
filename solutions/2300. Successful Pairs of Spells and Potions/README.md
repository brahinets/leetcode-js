# 2300. Successful Pairs of Spells and Potions

## Medium

You are given two positive integer arrays `spells` and `potions`, of length `n` and `m` respectively, where `spells[i]`
represents the strength of the `i-th` spell and `potions[j]` represents the strength of the `j-th` potion. You are also
given an integer `success`. A spell and potion pair is considered successful if the product of their strengths is at
least success. Return an integer array pairs of length `n` where `pairs[i]` is the number of potions that will form a
successful pair with the `i-th` spell.

### Constraints:

- `n == spells.length`
- `m == potions.length`
- `1 <= n, m <= 10^5`
- `1 <= spells[i], potions[i] <= 10^5`
- `1 <= success <= 10^10`
