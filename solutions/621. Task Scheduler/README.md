# 621. Task Scheduler

## Medium

You are given an array of CPU `tasks`, each represented by letters A to Z, and a cooling time, `n`. Each cycle or
interval allows the completion of one task. Tasks can be completed in any order, but there's a constraint: identical
tasks must be separated by at least `n` intervals due to cooling time. Return the minimum number of intervals required
to complete all tasks.

### Constraints:

- `1 <= tasks.length <= 10^4`
- `tasks[i]` is an uppercase English letter.
- `0 <= n <= 100`
