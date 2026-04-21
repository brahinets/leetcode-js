# 1722. Minimize Hamming Distance After Swap Operations

Given two integer arrays `source` and `target` of length `n`, and an array `allowedSwaps`
where each entry `[a, b]` permits swapping `source[a]` and `source[b]` any number of times,
return the minimum Hamming distance between `source` and `target` after any swaps.

## Approach

Allowed swaps transitively connect indices into components (Union-Find). Within each
component, source values can be freely rearranged. For each component, greedily match
source values to target values; unmatched positions contribute to the Hamming distance.

**Time:** O(n · α(n) + k) where k = allowedSwaps length  
**Space:** O(n)
