# 380. Insert Delete GetRandom O(1)

## Medium

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `bool insert(int val)` Inserts an item val into the set if not present. Returns `true` if the item was not
  present, `false` otherwise.
- `bool remove(int val)` Removes an item val from the set if present. Returns `true` if the item was present, `false`
  otherwise.
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element
  exists when this method is called). Each element must have the same probability of being returned.

You must implement the functions of the class such that each function works in average `O(1)` time complexity.

### Constraints:

- `-2^31 <= val <= 2^31 - 1`
- At most `2 * 10^5` calls will be made to `insert`, `remove`, and `getRandom`.
- There will be at least one element in the data structure when `getRandom` is called.
