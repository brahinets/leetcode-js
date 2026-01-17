# 3047. Find the Largest Area of Square Inside Two Rectangles

## Medium

There exist `n` rectangles in a 2D plane with edges parallel to the `x` and `y` axis. You are given two 2D integer
arrays `bottomLeft` and `topRight` where `bottomLeft[i] = [a_i, b_i]` and `topRight[i] = [c_i, d_i]` represent the
bottom-left and top-right coordinates of the `ith` rectangle, respectively. You need to find the maximum area of a
square that can fit inside the intersecting region of at least two rectangles. Return `0` if such a square does not
exist.

### Constraints:

- `n == bottomLeft.length == topRight.length`
- `2 <= n <= 10^3`
- `bottomLeft[i].length == topRight[i].length == 2`
- `1 <= bottomLeft[i][0], bottomLeft[i][1] <= 10^7`
- `1 <= topRight[i][0], topRight[i][1] <= 10^7`
- `bottomLeft[i][0] < topRight[i][0]`
- `bottomLeft[i][1] < topRight[i][1]`
