# 174. Dungeon Game

## Hard

The demons had captured the princess and imprisoned her in the **bottom-right room** of a dungeon. The dungeon consists of `m x n` rooms laid out in a grid. The knight starts in the **top-left room** and must fight his way to the princess.

The knight has an initial health point represented by a positive integer. If at any point his health drops to `0` or below, he dies immediately.

Each room has an integer value:
- **Negative** — demons reduce the knight's health by that amount.
- **Positive** — magic orbs restore the knight's health by that amount.
- **Zero** — the room is empty.

The knight can only move **right** or **down** at each step.

Return the **minimum initial health** so the knight can reach the princess.

### Example:

```
dungeon = [[-2, -3,  3],
           [-5, -10, 1],
           [10, 30, -5]]
```

Output: `7`

### Constraints:

- `m == dungeon.length`
- `n == dungeon[0].length`
- `1 <= m, n <= 200`
- `-1000 <= dungeon[i][j] <= 1000`
