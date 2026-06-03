# Earliest Finish Time for Land and Water Rides II

## Medium

You are given two categories of theme park attractions: **land rides** and **water rides**.

- **Land rides**
  - `landStartTime[i]` – the earliest time the `i`th land ride can be boarded.
  - `landDuration[i]` – how long the `i`th land ride lasts.
- **Water rides**
  - `waterStartTime[j]` – the earliest time the `j`th water ride can be boarded.
  - `waterDuration[j]` – how long the `j`th water ride lasts.

A tourist must experience **exactly one** ride from **each** category, in **either order**.

- A ride may be started at its opening time or **any later moment**.
- If a ride is started at time `t`, it finishes at time `t + duration`.
- Immediately after finishing one ride the tourist may board the other (if it is already open) or wait until it opens.

Return the **earliest possible time** at which the tourist can finish both rides.

### Examples

**Example 1:**

Input: `landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]`

Output: `9`

Explanation:
- Plan A (land ride 0 → water ride 0): Start land at 2, finish at 6. Water opens at 6, board immediately, finish at 9.
- Plan A gives the earliest finish time of 9.

**Example 2:**

Input: `landStartTime = [5], landDuration = [3], waterStartTime = [1], waterDuration = [10]`

Output: `14`

Explanation:
- Plan A (water ride 0 → land ride 0): Start water at 1, finish at 11. Land opened at 5, board at 11, finish at 14.
- Plan A provides the earliest finish time of 14.

### Constraints

- `1 <= n, m <= 5 * 10^4`
- `landStartTime.length == landDuration.length == n`
- `waterStartTime.length == waterDuration.length == m`
- `1 <= landStartTime[i], landDuration[i], waterStartTime[j], waterDuration[j] <= 10^5`
