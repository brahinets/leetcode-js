# 1622. Fancy Sequence

## Hard

Write an API that generates fancy sequences using the `append`, `addAll`, and `multAll` operations.

**Implement the `Fancy` class:**

- `Fancy()` — Initializes the object with an empty sequence.
- `void append(val)` — Appends an integer `val` to the end of the sequence.
- `void addAll(inc)` — Increments all existing values in the sequence by `inc`.
- `void multAll(m)` — Multiplies all existing values in the sequence by `m`.
- `int getIndex(idx)` — Gets the current value at index `idx` (0-indexed) modulo **10⁹ + 7**. Returns **-1** if the index is out of bounds.

### Example:

```
Input:
["Fancy","append","addAll","append","multAll","getIndex","addAll","append","multAll","getIndex","getIndex","getIndex"]
[[],[2],[3],[7],[2],[0],[3],[10],[2],[0],[1],[2]]

Output: [null,null,null,null,null,10,null,null,null,26,34,20]

Explanation:
fancy.append(2)    // [2]
fancy.addAll(3)    // [5]
fancy.append(7)    // [5, 7]
fancy.multAll(2)   // [10, 14]
fancy.getIndex(0)  // 10
fancy.addAll(3)    // [13, 17]
fancy.append(10)   // [13, 17, 10]
fancy.multAll(2)   // [26, 34, 20]
fancy.getIndex(0)  // 26
fancy.getIndex(1)  // 34
fancy.getIndex(2)  // 20
```

### Constraints:

- At most `10^5` calls total to `append`, `addAll`, `multAll`, and `getIndex`.
- `1 <= val, inc, m <= 10^4`
- `0 <= idx <= 10^5`
