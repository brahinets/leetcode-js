# 3623. Count Number of Trapezoids I

## Medium

You are given a 2D integer array `points`, where `points[i] = [xi, yi]` represents the coordinates of the `ith` point on
the Cartesian plane. A horizontal trapezoid is a convex quadrilateral with at least one pair of horizontal sides (i.e.
parallel to the x-axis). Two lines are parallel if and only if they have the same slope. Return the number of unique
horizontal trapezoids that can be formed by choosing any four distinct points from `points`. Since the answer may be
very large, return it modulo `10^9 + 7`.

### Constraints:

- `4 <= points.length <= 10^5`
- `–10^8 <= xi, yi <= 10^8`
- All points are pairwise distinct.
