# 146. LRU Cache

## Medium

Design a data structure that follows the constraints of a `Least Recently Used (LRU)` cache.

Implement the LRUCache class:

- `LRUCache(int capacity)` Initialize the LRU cache with positive size capacity.
- `int get(int key)` Return the value of the key if the key exists, otherwise return -1.
- `void put(int key, int value)` Update the value of the key if the key exists. Otherwise, add the key-value pair to the
  cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
  The functions get and put must each run in `O(1)` average time complexity.

### Constraints:

`1 <= capacity <= 3000`
`0 <= key <= 10^4`
`0 <= value <= 10^5`
At most `2 * 10^5` calls will be made to get and put.
