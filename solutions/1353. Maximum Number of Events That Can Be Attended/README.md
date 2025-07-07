# 1353. Maximum Number of Events That Can Be Attended

## Medium

You are given an array of events where `events[i] = [startDayi, endDayi]`. Every event `i` starts at `startDayi` and
ends at `endDayi`. You can attend an event `i` at any day `d` where `startTimei <= d <= endTimei`. You can only attend
one event at any time `d`. Return the maximum number of events you can attend.

### Constraints:

- `1 <= events.length <= 10^5`
- `events[i].length == 2`
- `1 <= startDayi <= endDayi <= 10^5`
