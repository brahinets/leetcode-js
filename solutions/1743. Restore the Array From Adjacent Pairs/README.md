# 1743. Restore the Array From Adjacent Pairs

## Medium

There is an integer array `nums` that consists of `n` unique elements, but you have forgotten it. However, you do
remember every pair of adjacent elements in `nums`. You are given a 2D integer array `adjacentPairs` of size `n - 1`
where each `adjacentPairs[i] = [ui, vi]` indicates that the elements `ui` and `vi` are adjacent in `nums`. It is
guaranteed that every adjacent pair of elements `nums[i]` and `nums[i+1]` will exist in `adjacentPairs`, either as
`[nums[i], nums[i+1]]` or `[nums[i+1], nums[i]]`. The pairs can appear in any order. Return the original array `nums`.
If there are multiple solutions, return any of them.

### Constraints:

- `nums.length == n`
- `adjacentPairs.length == n - 1`
- `adjacentPairs[i].length == 2`
- `2 <= n <= 10^5`
- `-10^5 <= nums[i], ui, vi <= 10^5`
- There exists some `nums` that has `adjacentPairs` as its pairs.
