# 706. Design HashMap

## Easy

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:

- `MyHashMap()` initializes the object with an empty map.
- `void put(int key, int value)` inserts a `(key, value)` pair into the `HashMap`. If the key already exists in the map,
  update the corresponding value.
- `int get(int key)` returns the value to which the specified key is mapped, or `-1` if this map contains no mapping for
  the key.
- `void remove(key)` removes the key and its corresponding value if the map contains the mapping for the key.

### Constraints:

- `0 <= key, value <= 10^6`
- At most `10^4` calls will be made to put, get, and remove.
