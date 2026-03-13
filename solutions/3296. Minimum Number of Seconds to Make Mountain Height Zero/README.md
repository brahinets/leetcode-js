# 3296. Minimum Number of Seconds to Make Mountain Height Zero

## Medium

You are given an integer `mountainHeight` denoting the height of a mountain, and an integer array `workerTimes` representing the work time of workers in seconds.

The workers work **simultaneously** to make the mountain height zero. For worker `i` working for `x` seconds to decrease the mountain height by `x`, it takes `workerTimes[i] + workerTimes[i] * 2 + ... + workerTimes[i] * x` seconds. For example, if `workerTimes[i] = 2`:

- To decrease the height of the mountain by 1, it takes `2` seconds.
- To decrease the height of the mountain by 2, it takes `2 + 4 = 6` seconds.
- To decrease the height of the mountain by 3, it takes `2 + 4 + 6 = 12` seconds.

Return an integer representing the **minimum number of seconds** required for the workers to make the mountain height zero.

### Constraints:

- `1 <= mountainHeight <= 10^5`
- `1 <= workerTimes.length <= 10^4`
- `1 <= workerTimes[i] <= 10^6`
