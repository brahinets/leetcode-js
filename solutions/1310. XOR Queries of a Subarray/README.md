# 1310. XOR Queries of a Subarray

## Medium

You are given an array `arr` of positive integers. You are also given the array `queries` where
`queries[i] = [lefti, righti]`. For each query `i` compute the XOR of elements from `lefti` to `righti` (that is,
`arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti]`). Return an array answer where `answer[i]` is the answer to the
ith query.

### Constraints:

- `1 <= arr.length, queries.length <= 3 * 10^4`
- `1 <= arr[i] <= 10^9`
- `queries[i].length == 2`
- `0 <= lefti <= righti < arr.length`
