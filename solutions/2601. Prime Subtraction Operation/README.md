# 2601. Prime Subtraction Operation

## Medium

You are given a 0-indexed integer array `nums` of length `n`. You can perform the following operation as many times as
you want: Pick an index `i` that you haven’t picked before, and pick a prime `p` strictly less than `nums[i]`, then
subtract `p` from `nums[i]`. Return `true` if you can make nums a strictly increasing array using the above operation
and `false` otherwise. A strictly increasing array is an array who's each element is strictly greater than its preceding
element.

### Constraints:

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `nums.length == n`
