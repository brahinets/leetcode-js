# 786. K-th Smallest Prime Fraction

## Medium

You are given a sorted integer array `arr` containing `1` and prime numbers, where all the integers of `arr` are unique.
You are also given an integer `k`. For every `i` and `j` where `0 <= i < j < arr.length`, we consider the
fraction `arr[i] / arr[j]`. Return the `kth` smallest fraction considered. Return your answer as an array of integers of
size `2`, where `answer[0] == arr[i]` and `answer[1] == arr[j]`.

### Constraints:

- `2 <= arr.length <= 1000`
- `1 <= arr[i] <= 3 * 104`
- `arr[0] == 1`
- `arr[i] is a prime number for i > 0.`
- All the numbers of `arr` are unique and sorted in strictly increasing order.
- `1 <= k <= arr.length * (arr.length - 1) / 2`

**Follow up:** Can you solve the problem with better than `O(n2)` complexity?
