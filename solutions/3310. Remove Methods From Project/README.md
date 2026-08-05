# 3310. Remove Methods From Project

## Medium

You are maintaining a project that contains `n` methods numbered from `0` to `n - 1`. You are also given a 2D integer
array `invocations`, where `invocations[i] = [ai, bi]` indicates that method `ai` invokes method `bi`.

There is a known bug in method `k`. Method `k`, along with any method invoked by it, directly or indirectly, is
considered **suspicious** and we aim to remove it.

A group of methods can only be removed if no method **outside** the group invokes any method **within** it.

Return an array containing all the remaining methods after removing all the suspicious methods. You may return the
answer in **any order**. If it is not possible to remove **all** the suspicious methods, none should be removed.

### Constraints

- `1 <= n <= 10^5`
- `0 <= k <= n - 1`
- `0 <= invocations.length <= 2 * 10^5`
- `invocations[i].length == 2`
- `0 <= ai, bi <= n - 1`
- `ai != bi`
- `invocations[i] != invocations[j]` for `i != j`
