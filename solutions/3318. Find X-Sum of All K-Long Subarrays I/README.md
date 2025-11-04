# 3318. Find X-Sum of All K-Long Subarrays I

## Easy

You are given an array `nums` of `n` integers and two integers `k` and `x`. The x-sum of an array is calculated by the
following procedure: Count the occurrences of all elements in the array. Keep only the occurrences of the top `x` most
frequent elements. If two elements have the same number of occurrences, the element with the bigger value is considered
more frequent. Calculate the sum of the resulting array. Note that if an array has less than `x` distinct elements, its
`x`-sum is the sum of the array. Return an integer array `answer` of length `n - k + 1` where `answer[i]` is the x-sum
of the subarray `nums[i..i + k - 1]`.

### Constraints:

- `1 <= n == nums.length <= 50`
- `1 <= nums[i] <= 50`
- `1 <= x <= k <= nums.length`
