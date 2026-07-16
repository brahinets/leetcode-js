# Sum of GCD of Formed Pairs

## Medium

Given an integer array `nums` of length `n`, construct a `prefixGcd` array where for each index `i`, you calculate `prefixGcd[i] = gcd(nums[i], max(nums[0], nums[1], ..., nums[i]))`.

After constructing `prefixGcd`, you must process it as follows:

1. Sort `prefixGcd` in non-decreasing order
2. Form pairs by repeatedly taking the smallest unpaired element and the largest unpaired element until no more pairs can be formed
3. If `n` is odd, the middle element remains unpaired and should be ignored
4. For each formed pair, compute the GCD of the two elements
5. Return the sum of the GCD values of all formed pairs

**Constraints:**
- `1 <= n == nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
