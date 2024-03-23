# 1396. Design Underground System

## Medium

An underground railway system is keeping track of customer travel times between different stations. They are using this
data to calculate the average time it takes to travel from one station to another. Implement the `UndergroundSystem`
class:

- `void checkIn(int id, string stationName, int t)`
    - A customer with a card ID equal to `id`, checks in at the station `stationName` at time `t`.
    - A customer can only be checked into one place at a time.
- `void checkOut(int id, string stationName, int t)`
    - A customer with a card ID equal to `id`, checks out from the station `stationName` at time `t`.
- `double getAverageTime(string startStation, string endStation)`
    - Returns the average time it takes to travel from `startStation` to `endStation`.
    - The average time is computed from all the previous traveling times from `startStation` to `endStation` that
      happened directly, meaning a check in at `startStation` followed by a check out from `endStation`.
    - The time it takes to travel from `startStation` to `endStation` may be different from the time it takes to travel
      from `endStation` to `startStation`.
    - There will be at least one customer that has traveled from `startStation` to `endStation` before `getAverageTime`
      is called.

You may assume all calls to the `checkIn` and `checkOut` methods are consistent. If a customer checks in at time `t1`
then checks out at time `t2`, then `t1 < t2`. All events happen in chronological order.

### Constraints:

- `1 <= id, t <= 10^6`
- `1 <= stationName.length, startStation.length, endStation.length <= 10`
- All strings consist of uppercase and lowercase English letters and digits.
- There will be at most `2 * 10^4` calls in total to `checkIn`, `checkOut`, and `getAverageTime`.
- Answers within `10^-5` of the actual value will be accepted.
