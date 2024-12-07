# 1760. Minimum Limit of Balls in a Bag

## Medium

You are given an integer array `nums` where the `ith` bag contains `nums[i]` balls. You are also given an integer
`maxOperations`. You can perform the following operation at most `maxOperations` times: Take any bag of balls and divide
it into two new bags with a positive number of balls. For example, a bag of `5` balls can become two new bags of `1` and
`4` balls, or two new bags of `2` and `3` balls. Your penalty is the maximum number of balls in a bag. You want to
minimize your penalty after the operations. Return the minimum possible penalty after performing the operations.

### Constraints:

- `1 <= nums.length <= 10^5`
- `1 <= maxOperations, nums[i] <= 10^9`
