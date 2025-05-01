# 2071. Maximum Number of Tasks You Can Assign

## Hard

You have `n` tasks and `m` workers. Each task has a strength requirement stored in a 0-indexed integer array `tasks`,
with the `ith` task requiring `tasks[i]` strength to complete. The strength of each worker is stored in a 0-indexed
integer array `workers`, with the `jth` worker having `workers[j]` strength. Each worker can only be assigned to a
single task and must have a strength greater than or equal to the task's strength requirement (i.e.,
`workers[j] >= tasks[i]`). Additionally, you have pills magical `pills` that will increase a worker's strength by
`strength`. You can decide which workers receive the magical pills, however, you may only give each worker at most one
magical pill. Given the 0-indexed integer arrays `tasks` and `workers` and the integers `pills` and `strength`, return
the maximum number of tasks that can be completed.

### Constraints:

– `n == tasks.length`
– `m == workers.length`
– `1 <= n, m <= 5 * 10^4`
– `0 <= pills <= m`
– `0 <= tasks[i], workers[j], strength <= 10^9`
