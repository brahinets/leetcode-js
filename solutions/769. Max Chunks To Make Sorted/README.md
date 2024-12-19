# 769. Max Chunks To Make Sorted

## Medium

You are given an integer array `arr` of length `n` that represents a permutation of the integers in the range
`[0, n - 1]`. We split arr into some number of chunks (i.e., partitions), and individually sort each chunk. After
concatenating them, the result should equal the sorted array. Return the largest number of chunks we can make to sort
the array.

### Constraints:

– `n == arr.length`
– `1 <= n <= 10`
– `0 <= arr[i] < n`
– All the elements of `arr` are unique.
