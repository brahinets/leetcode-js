# 2127. Maximum Employees to Be Invited to a Meeting

## Hard

A company is organizing a meeting and has a list of `n` employees, waiting to be invited. They have arranged for a large
circular table, capable of seating any number of employees. The employees are numbered from `0` to `n - 1`. Each
employee has a favorite person and they will attend the meeting only if they can sit next to their favorite person at
the table. The favorite person of an employee is not themself. Given a 0-indexed integer array `favorite`, where
`favorite[i]` denotes the favorite person of the `ith` employee, return the maximum number of employees that can be
invited to the meeting.

### Constraints:

- `n == favorite.length`
- `2 <= n <= 10^5`
- `0 <= favorite[i] <= n - 1`
- `favorite[i] != i`
