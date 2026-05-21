# 1306. Jump Game III

## Medium

Given an array of non-negative integers `arr`, you are initially positioned at `start` index of the array. When you are
at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`, check if you can reach any index with value `0`.

Notice that you can not jump outside of the array at any time.

### Constraints:

- `1 <= arr.length <= 5 * 10^4`
- `0 <= arr[i] < arr.length`
- `0 <= start < arr.length`
