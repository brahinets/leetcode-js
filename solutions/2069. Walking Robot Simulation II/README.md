# 2069. Walking Robot Simulation II

## Medium

A robot is placed at `(0, 0)` on a grid of size `width x height`, initially facing South. Implement a `Robot` class:

- `Robot(width, height)`: Initializes the robot on the grid.
- `step(num)`: Moves the robot `num` steps along the perimeter (counterclockwise: North → East → South → West).
- `getPos()`: Returns the current position `[x, y]`.
- `getDir()`: Returns the current direction (`"North"`, `"East"`, `"South"`, or `"West"`). Returns `"South"` if no steps have been taken.

### Constraints:

- `2 <= width, height <= 100`
- `1 <= num <= 10^5`
- At most `10^4` calls to `step`, `getPos`, and `getDir`