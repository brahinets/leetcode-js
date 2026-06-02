# 3633. Earliest Finish Time for Land and Water Rides I

## Easy

You are given two arrays `landStart` and `landDuration` describing land rides, and two arrays `waterStart` and
`waterDuration` describing water rides. The `i`th land ride opens at `landStart[i]` and lasts `landDuration[i]`
time units. The `j`th water ride opens at `waterStart[j]` and lasts `waterDuration[j]` time units.

A tourist must complete exactly one land ride and one water ride in either order. A ride can be started at its
opening time or any later time. If a ride starts at time `t`, it finishes at `t + duration`. The tourist may
board the second ride immediately after finishing the first if it is already open, or wait until it opens.

Return the earliest possible time at which the tourist can finish both rides.

### Constraints:

- `1 <= landStart.length, waterStart.length <= 100`
- `landStart.length == landDuration.length`
- `waterStart.length == waterDuration.length`
- `1 <= landStart[i], landDuration[i], waterStart[j], waterDuration[j] <= 1000`
