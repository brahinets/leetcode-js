# 552. Student Attendance Record II

## Hard

An attendance record for a student can be represented as a string where each character signifies whether the student was
absent, late, or present on that day. The record only contains the following three characters:

- `A`: Absent.
- `L`: Late.
- `P`: Present.
  Any student is eligible for an attendance award if they meet both of the following criteria:

- The student was absent (`A`) for strictly fewer than 2 days total.
- The student was never late (`L`) for 3 or more consecutive days.

Given an integer `n`, return the number of possible attendance records of length `n` that make a student eligible for an
attendance award. The answer may be very large, so return it modulo `10^9 + 7`.

### Constraints:

- `1 <= n <= 10^5`
