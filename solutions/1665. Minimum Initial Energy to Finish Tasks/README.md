# 1665. Minimum Initial Energy to Finish Tasks

## Hard

You are given an array `tasks` where `tasks[i] = [actual_i, minimum_i]`:

- `actual_i` is the actual amount of energy you spend to finish the `i`th task.
- `minimum_i` is the minimum amount of energy you require to begin the `i`th task.

For example, if the task is `[10, 12]` and your current energy is `11`, you cannot start this task. However, if your
current energy is `13`, you can complete this task, and your energy will be `3` after finishing it.

You can finish the tasks in any order you like.

Return the **minimum** initial amount of energy you will need to finish all the tasks.

### Constraints:

- `1 <= tasks.length <= 10^5`
- `1 <= actual_i <= minimum_i <= 10^4`
