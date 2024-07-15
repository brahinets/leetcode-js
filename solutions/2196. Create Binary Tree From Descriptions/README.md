# 2196. Create Binary Tree From Descriptions

## Medium

You are given a 2D integer array `descriptions` where `descriptions[i] = [parenti, childi, isLefti]` indicates that
`parenti` is the parent of `childi` in a binary tree of unique values. Furthermore,

- If `isLefti == 1`, then `childi` is the left child of `parenti`.
- If `isLefti == 0`, then `childi` is the right child of `parenti`.

Construct the binary tree described by `descriptions` and return its root. The test cases will be generated such that
the binary tree is valid.

### Constraints:

- `1 <= descriptions.length <= 10^4`
- `descriptions[i].length == 3`
- `1 <= parenti, childi <= 10^5`
- `0 <= isLefti <= 1`
- The binary tree described by descriptions is valid.
