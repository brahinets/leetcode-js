# 2212. Removing Minimum and Maximum From Array

## Medium

You are given a **0-indexed** array of **distinct** integers `nums`.

There is an element in `nums` that has the **lowest** value and an element that has the **highest** value. We
call them the **minimum** and **maximum** respectively. Your goal is to remove **both** these elements from the
array.

A **deletion** is defined as either removing an element from the **front** of the array or removing an element
from the **back** of the array.

Return *the **minimum** number of deletions it will take to remove **both** the minimum and maximum element from
the array*.

### Constraints:

- `1 <= nums.length <= 10^5`
- `-10^5 <= nums[i] <= 10^5`
- The integers in `nums` are **distinct**.
