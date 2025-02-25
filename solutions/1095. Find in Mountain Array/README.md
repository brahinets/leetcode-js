# 1095. Find in Mountain Array

## Hard

You may recall that an array `arr` is a mountain array if and only if: `arr.length >= 3` There exists some `i` with
`0 < i < arr.length - 1` such that: `arr[0] < arr[1] < ... < arr[i - 1] < arr[i]` and
`arr[i] > arr[i + 1] > ... > arr[arr.length - 1]` Given a mountain array `mountainArr`, return the minimum index such
that `mountainArr.get(index) == target`. If such an index does not exist, return `-1`. You cannot access the mountain
array directly. You may only access the array using a `MountainArray` interface: - `MountainArray.get(k`) returns the
element of the array at index `k` (0-indexed). - `MountainArray.length()` returns the length of the array.

Submissions making more than `100` calls to `MountainArray.get` will be judged Wrong Answer. Also, any solutions that
attempt to circumvent the judge will result in disqualification.

### Constraints:

- `3 <= mountainArr.length() <= 10^4`
- `0 <= target <= 10^9`
- `0 <= mountainArr.get(index) <= 10^9`
