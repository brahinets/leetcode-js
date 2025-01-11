# 2251. Number of Flowers in Full Bloom

## Hard

You are given a 0-indexed 2D integer array `flowers`, where `flowers[i] = [starti, endi]` means the `ith` flower will be
in full bloom from `starti` to `endi` (inclusive). You are also given a 0-indexed integer array `people` of size `n`,
where `people[i]` is the time that the `ith` person will arrive to see the flowers. Return an integer array `answer` of
size `n`, where `answer[i]` is the number of flowers that are in full bloom when the `ith` person arrives.

### Constraints:

- `1 <= flowers.length <= 5 * 10^4`
- `flowers[i].length == 2`
- `1 <= starti <= endi <= 10^9`
- `1 <= people.length <= 5 * 10^4`
- `1 <= people[i] <= 10^9`
