# 368. Largest Divisible Subset

## Medium

Given a set of distinct positive integers `nums`, return the largest subset answer such that every
pair `(answer[i], answer[j])` of elements in this subset satisfies:

- `answer[i] % answer[j] == 0`
- or `answer[j] % answer[i] == 0`
- If there are multiple solutions, return any of them.

### Constraints:

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 2 * 10^9`
- All the integers in nums are unique.
