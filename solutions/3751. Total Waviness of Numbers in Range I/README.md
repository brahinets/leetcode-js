# Total Waviness of Numbers in Range I

## Medium

You are given two integers `num1` and `num2` representing an inclusive range `[num1, num2]`.

The **waviness** of a number is defined as the total count of its peaks and valleys:

- A digit is a **peak** if it is strictly greater than both of its immediate neighbors.
- A digit is a **valley** if it is strictly less than both of its immediate neighbors.
- The first and last digits of a number cannot be peaks or valleys.

Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range `[num1, num2]`.

## Examples

**Example 1:**

```
Input: num1 = 120, num2 = 130
Output: 3
Explanation:
In the range [120, 130]:
- 120: middle digit 2 is a peak (2 > 1 and 2 > 0), waviness = 1.
- 121: middle digit 2 is a peak, waviness = 1.
- 130: middle digit 3 is a peak, waviness = 1.
All other numbers in the range have a waviness of 0.
Thus, total waviness is 1 + 1 + 1 = 3.
```

**Example 2:**

```
Input: num1 = 198, num2 = 202
Output: 3
Explanation:
- 198: digit 9 is a peak, waviness = 1.
- 201: digit 0 is a valley (0 < 2 and 0 < 1), waviness = 1.
- 202: digit 0 is a valley, waviness = 1.
Total = 3.
```

**Example 3:**

```
Input: num1 = 4848, num2 = 4848
Output: 2
Explanation:
- 4848: digit 8 (index 1) is a peak, digit 4 (index 2) is a valley, waviness = 2.
```

## Constraints

- `1 <= num1 <= num2 <= 10^5`
