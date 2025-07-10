# 3440. Reschedule Meetings for Maximum Free Time II

## Medium

You are given an integer `eventTime` denoting the duration of an event. You are also given two integer arrays
`startTime` and `endTime`, each of length `n`. These represent the start and end times of `n` non-overlapping meetings
that occur during the event between time `t = 0` and time `t = eventTime`, where the ith meeting occurs during the time
`[startTime[i], endTime[i]]`. You can reschedule at most one meeting by moving its start time while maintaining the same
duration, such that the meetings remain non-overlapping, to maximize the longest continuous period of free time during
the event. Return the maximum amount of free time possible after rearranging the meetings. Note that the meetings can
not be rescheduled to a time outside the event and they should remain non-overlapping. Note: In this version, it is
valid for the relative ordering of the meetings to change after rescheduling one meeting.

### Constraints:

- `1 <= eventTime <= 10^9`
- `n == startTime.length == endTime.length`
- `2 <= n <= 10^5`
- `0 <= startTime[i] < endTime[i] <= eventTime`
- `endTime[i] <= startTime[i + 1] where i lies in the range [0, n - 2].`
