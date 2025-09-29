# 1039. Minimum Score Triangulation of Polygon

## Medium

You have a convex `n`-sided polygon where each vertex has an integer value. You are given an integer array `values`
where `values[i]` is the value of the `ith` vertex in clockwise order. Polygon triangulation is a process where you
divide a polygon into a set of triangles and the vertices of each triangle must also be vertices of the original
polygon. Note that no other shapes other than triangles are allowed in the division. This process will result in `n - 2`
triangles. You will triangulate the polygon. For each triangle, the weight of that triangle is the product of the values
at its vertices. The total score of the triangulation is the sum of these weights over all `n - 2` triangles. Return the
minimum possible score that you can achieve with some triangulation of the polygon.

### Constraints:

- `n == values.length`
- `3 <= n <= 50`
- `1 <= values[i] <= 100`
