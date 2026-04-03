# 3661. Maximum Walls Destroyed by Robots

## Hard

There is an endless straight line populated with robots and walls. You are given:

- `robots[i]` — position of the i-th robot
- `distance[i]` — maximum distance the i-th robot's bullet can travel
- `walls[j]` — position of the j-th wall

Each robot fires **one bullet** either left or right. A bullet destroys every wall in its path within range, but **stops immediately when it hits another robot**. A wall at the same position as a robot can be destroyed by the robot at that position.

Return the **maximum number of unique walls** that can be destroyed.

### Constraints:

- `1 <= robots.length <= 10^5`
- `distance.length == robots.length`
- `1 <= distance[i] <= 10^9`
- `0 <= walls.length <= 10^5`
- `-10^9 <= robots[i], walls[j] <= 10^9`
- All values in `robots` are distinct
