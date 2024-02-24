# 2092. Find All People With Secret

## Hard

You are given an integer `n` indicating there are `n` people numbered from `0` to `n - 1`. You are also given a
0-indexed 2D integer array `meetings` where `meetings[i] = [xi, yi, timei]` indicates that person `xi` and person `yi`
have a meeting at `timei`. A person may attend multiple meetings at the same time. Finally, you are given an
integer `firstPerson`. Person `0` has a secret and initially shares the secret with a person `firstPerson` at time `0`.
This secret is then shared every time a meeting takes place with a person that has the secret. More formally, for every
meeting, if a person `xi` has the secret at `timei`, then they will share the secret with person `yi`, and vice versa.
The secrets are shared instantaneously. That is, a person may receive the secret and share it with people in other
meetings within the same time frame. Return a list of all the people that have the secret after all the meetings have
taken place. You may return the answer in any order.

### Constraints:

- `2 <= n <= 10^5`
- `1 <= meetings.length <= 10^5`
- `meetings[i].length == 3`
- `0 <= xi, yi <= n - 1`
- `xi != yi`
- `1 <= timei <= 10^5`
- `1 <= firstPerson <= n - 1`
