# 3074. Apple Redistribution into Boxes

## Easy

You are given an array apple of size `n` and an array capacity of size `m`. There are `n` packs where the ith pack
contains `apple[i]` apples. There are `m` boxes as well, and the ith box has a capacity of `capacity[i]` apples. Return
the minimum number of boxes you need to select to redistribute these n packs of apples into boxes. Note that, apples
from the same pack can be distributed into different boxes.

### Constraints:

- `1 <= n == apple.length <= 50`
- `1 <= m == capacity.length <= 50`
- `1 <= apple[i], capacity[i] <= 50`
- The input is generated such that it's possible to redistribute packs of apples into boxes.
