# Left and Right Sum Differences

## Easy

Given a **0-indexed** integer array `nums` of size `n`, find a **0-indexed** integer array `answer` where:

- `answer[i] = |leftSum[i] - rightSum[i]|`.

Where:

- `leftSum[i]` is the sum of elements to the **left** of the index `i` in the array `nums`. If there is no such element, `leftSum[i] = 0`.
- `rightSum[i]` is the sum of elements to the **right** of the index `i` in the array `nums`. If there is no such element, `rightSum[i] = 0`.

Return *the array* `answer`.

**Constraints:**

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 10^5`
