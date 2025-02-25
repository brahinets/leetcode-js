# 2948. Make Lexicographically Smallest Array by Swapping Elements

## Medium

You are given a 0-indexed array of positive integers `nums` and a positive integer `limit`. In one operation, you can
choose any two indices `i` and `j` and swap `nums[i]` and `nums[j]` if `|nums[i] - nums[j]| <= limit`. Return the
lexicographically smallest array that can be obtained by performing the operation any number of times. An array `a` is
lexicographically smaller than an array `b` if in the first position where `a` and `b` differ, array `a` has an element
that is less than the corresponding element in `b`. For example, the array `[2,10,3]` is lexicographically smaller than
the array `[10,2,3]` because they differ at index `0 and 2 < 10`.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= limit <= 10^9`
