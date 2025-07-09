# 3439. Reschedule Meetings for Maximum Free Time I

## Medium

You are given an integer `eventTime` denoting the duration of an event, where the event occurs from time `t = 0` to time `t = eventTime`. You are also given two integer arrays `startTime` and `endTime`, each of length `n`. These represent the start and end time of `n` non-overlapping meetings, where the `ith` meeting occurs during the time `[startTime[i], endTime[i]]`. You can reschedule at most `k` meetings by moving their start time while maintaining the same duration, to maximize the longest continuous period of free time during the event. The relative order of all the meetings should stay the same and they should remain non-overlapping. Return the maximum amount of free time possible after rearranging the meetings. Note that the meetings can not be rescheduled to a time outside the event.

### Constraints:

- `1 <= eventTime <= 10^9`
- `n == startTime.length == endTime.length`
- `2 <= n <= 10^5`
- `1 <= k <= n`
- `0 <= startTime[i] < endTime[i] <= eventTime`
- `endTime[i] <= startTime[i + 1]` where `i` lies in the range `[0, n - 2]`.