# 1575. Count All Possible Routes

## Hard

You are given an array of distinct positive integers `locations` where `locations[i]` represents the position of
city `i`. You are also given integers `start`, `finish` and `fuel` representing the starting city, ending city, and the
initial amount of fuel you have, respectively. At each step, if you are at city `i`, you can pick any city `j` such
that `j != i` and `0 <= j < locations.length` and move to city `j`. Moving from city `i` to city `j` reduces the amount
of fuel you have by `|locations[i] - locations[j]|`. Please notice that `|x|` denotes the absolute value of `x`. Notice
that fuel cannot become negative at any point in time, and that you are allowed to visit any city more than once (
including `start` and `finish`). Return the count of all possible routes from `start` to `finish`. Since the answer may
be too large, return it modulo `10^9 + 7`.

### Constraints:

- `2 <= locations.length <= 100`
- `1 <= locations[i] <= 10^9`
- All integers in locations are distinct.
- `0 <= start`, `finish < locations.length`
- `1 <= fuel <= 200`
