# 3321. Find X-Sum of All K-Long Subarrays II

## Hard

You are given an array `nums` of `n` integers and two integers `k` and `x`. The x-sum of an array is calculated by the
following procedure: Count the occurrences of all elements in the array. Keep only the occurrences of the top `x` most
frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered
more frequent. Calculate the sum of the resulting array. Note that if an array has less than `x` distinct elements, its
x-sum is the sum of the array. Return an integer array `answer` of length `n - k + 1` where `answer[i]` is the x-sum of
the subarray `nums[i..i + k - 1]`.

### Constraints:

- `nums.length == n`
- `1 <= n <= 10^5`
- `1 <= nums[i] <= 10^9`
- `1 <= x <= k <= nums.length`
