# Total Waviness of Numbers in Range I

## Medium

You are given two integers `num1` and `num2` representing an inclusive range `[num1, num2]`.

The **waviness** of a number is defined as the total count of its peaks and valleys:

- A digit is a **peak** if it is strictly greater than both of its immediate neighbors.
- A digit is a **valley** if it is strictly less than both of its immediate neighbors.
- The first and last digits of a number cannot be peaks or valleys.

Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range `[num1, num2]`.

## Constraints

- `1 <= num1 <= num2 <= 10^5`
