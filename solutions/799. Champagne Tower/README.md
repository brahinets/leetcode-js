# 799. Champagne Tower

## Medium

We stack glasses in a pyramid, where the **first** row has `1` glass, the **second** row has `2` glasses, and so on until the 100th row. Each glass holds one cup of champagne.

Then, some champagne is poured into the first glass at the top. When the topmost glass is full, any excess liquid poured will fall equally to the glass immediately to the left and right of it. When those glasses become full, any excess champagne will fall equally to the left and right of those glasses, and so on. (A glass at the bottom row has its excess champagne fall on the floor.)

For example, after one cup of champagne is poured, the top glass is full. After two cups of champagne are poured, the two glasses on the second row are each half full. After three cups of champagne are poured, the second row is full, and the middle glass of the third row is half full.

Now after pouring some non-negative integer cups of champagne, return how full the `jth` glass in the `ith` row is (both `i` and `j` are 0-indexed.)

### Constraints:

- `0 <= poured <= 10^9`
- `0 <= query_glass <= query_row < 100`
