# Find the Number of Subsequences With Equal GCD

## Hard

Given an array `nums` of positive integers, find the number of pairs of non-empty subsequences (seq1, seq2) of `nums` that satisfy:

- seq1 and seq2 are disjoint (no index of nums is common between them)
- The GCD of the elements of seq1 is equal to the GCD of the elements of seq2

Since the answer may be very large, return it modulo 10^9 + 7.

**Note:** A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. A GCD of a sequence is the greatest common divisor of all elements in the sequence.

**Constraints:**
- 1 <= nums.length <= 200
- 1 <= nums[i] <= 200
