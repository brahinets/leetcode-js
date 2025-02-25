# 1829. Maximum XOR for Each Query

## Medium

You are given a sorted array `nums` of `n` non-negative integers and an integer `maximumBit`. You want to perform the
following query `n` times: Find a non-negative integer `k < 2^maximumBit` such that
`nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k` is maximized. `k` is the answer to the `ith` query. Remove
the last element from the current array nums. Return an array answer, where `answer[i]` is the answer to the ith query.

### Constraints:

– `nums.length == n`
– `1 <= n <= 10^5`
– `1 <= maximumBit <= 20`
– `0 <= nums[i] < 2^maximumBit`
– `nums` is sorted in ascending order.
