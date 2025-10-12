# 3539. Find Sum of Array Product of Magical Sequences

## Hard

You are given two integers, `m` and `k`, and an integer array `nums`. A sequence of integers `seq` is called magical if:

- `seq` has a size of `m`.
- `0 <= seq[i] < nums.length`
- The binary representation of `2^seq[0] + 2^seq[1] + ... + 2^seq[m - 1]` has `k` set bits.

The array product of this sequence is defined as `prod(seq) = (nums[seq[0]] * nums[seq[1]] * ... * nums[seq[m - 1]])`
Return the sum of the array products for all valid magical sequences. Since the answer may be large, return it modulo
`10^9 + 7`. A set bit refers to a bit in the binary representation of a number that has a value of `1`.

### Constraints:

- `1 <= k <= m <= 30`
- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 108`
